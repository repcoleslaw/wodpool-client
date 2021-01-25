import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Join, { Heading } from "./Join";

const propStub = {
  id: 1,
  max: 10,
  name: "Jo",
};

const checkForPool = (fn) => ({ queryByText }) =>
  fn(expect(queryByText(`Pool ID: ${propStub.id}`)));

const shouldDisplayPoolId = checkForPool((assertion) =>
  assertion.toBeInTheDocument()
);

const shouldNotDisplayPoolId = checkForPool((assertion) =>
  assertion.toBeNull()
);

describe('"Heading"', () => {
  it("should render empty without a name", () => {
    const { container } = render(<Heading />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render heading when given a name", () => {
    const { name } = propStub;
    render(<Heading text={name} />);
    expect(screen.getByRole("heading")).toHaveTextContent(name);
  });
});

describe('"Join"', () => {
  it("should init modal hidden", () => {
    const renderer = render(<Join {...propStub} />);
    shouldNotDisplayPoolId(renderer);
  });

  it("should open modal", async () => {
    const renderer = render(<Join {...propStub} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      shouldDisplayPoolId(renderer);
    });
  });
});

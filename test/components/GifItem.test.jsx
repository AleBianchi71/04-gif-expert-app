import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe("Puebas en GifItem", () => {
  const title = "Saitama";
  const url = "https://one-punch/Saitama.jpg";

  test("debe de hacer match con el snapshot", () => {
    const { containter } = render(<GifItem title={title} url={url} />);
    expect(containter).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el Alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar la imagen con el URL y el Alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

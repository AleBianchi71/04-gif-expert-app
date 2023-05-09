import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe("Pruebas en GifGrid", () => {
  const category = "One Punch";
  test("debe de mostrar el loading inicialmente ", () => {

   useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true
   })

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });
  test('debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs', () => {

const gifs = [
  {
    id: 'ABC',
    title: 'Saitama',
    url: 'https://www.google.com/search?q=saitama'
  },
  {
    id: '123',
    title: 'Tom y Jerry',
    url: 'https://i.ytimg.com/vi/iT1F7HqStj0/maxresdefault.jpg'
  }
]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
     })

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);


  })
  
});

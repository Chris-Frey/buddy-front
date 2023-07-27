import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";

describe("<AboutUs />", () => {
  beforeEach(() => {
    render(
      
      <BrowserRouter initialEntries={["AboutUs"]}>
          <AboutUs />
      </BrowserRouter>
    );
  });

  it("has Meet The Team! text", () => { 
    expect(screen.getByRole('heading', {
      name: /meet the team!/i
    })).toBeInTheDocument;
  });


  it("has Jesus text", () => { 
    expect(screen.getByRole('heading', {
      name: /jesus/i
    })).toBeInTheDocument;
  });

  it("has image", () => { 
    expect(screen.getAllByRole('img', { name: /default image/i })).toBeInTheDocument;
  });

  it("has Chris text", () => { 
    expect(screen.getByRole('heading', {
      name: /chris/i
    })).toBeInTheDocument;
  });
  it("has Padge text", () => { 
    expect(screen.getByRole('heading', {
      name: /padge/i
    })).toBeInTheDocument;
  });

  it("has text", () => { 
    expect(screen.getAllByText(/lorem ipsum dolor sit amet, consectetur adipiscing elit\. integer quis eros molestie, placerat orci porta, lacinia metus\. curabitur tincidunt pulvinar finibus\. etiam at molestie dui\. aenean fringilla, libero vitae feugiat posuere, urna massa venenatis massa, in pellentesque sem mauris maximus velit\. donec lacus nibh, viverra a enim vel, blandit porta magna\. aenean nec purus sagittis, cursus ante ac, ornare nisl\. duis et ligula vitae metus ornare semper ac ut quam\. nunc pretium sollicitudin orci nec accumsan\. vestibulum consequat, ex ac ullamcorper porttitor, nisl tellus dapibus orci, eget laoreet erat ligula sit amet augue\. suspendisse maximus in mauris vel tempus\. nunc dignissim massa at metus tempor, eget semper est tincidunt\. curabitur interdum eros ac ex condimentum dictum\. donec a nisi commodo, facilisis urna at, malesuada arcu\. nullam tincidunt faucibus sem eget tempor\. etiam non libero facilisis, ornare augue quis, maximus ligula\. pellentesque in iaculis purus, et sollicitudin eros\./i))
  });



})
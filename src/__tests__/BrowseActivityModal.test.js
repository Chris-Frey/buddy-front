import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BrowseActivityModal from '../components/BrowseActivity/BrowseActivityModal';



describe("<BrowseActivityModal />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <BrowseActivityModal />
    </BrowserRouter>
  )})

  it("has a button", () => {
    expect(screen.getByRole('button', {
      name: /\+/i
    })).toBeInTheDocument
  })

  it("has a '+' symbol", () => {
    expect(screen.getByText(/\+/i)).toBeInTheDocument
  })
//This is where the testing for the open modal text begins

  it("has 'browse activities' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/browse activities/i)).toBeInTheDocument
  })  

  it("has 'WEIGHT LIFTING' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/WEIGHT LIFTING/i)).toBeInTheDocument
  })  

  it("has 'RUNNING' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/RUNNING/i)).toBeInTheDocument
  })  

  it("has 'YOGA' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/YOGA/i)).toBeInTheDocument
  })  

  it("has 'BASKETBALL' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/BASKETBALL/i)).toBeInTheDocument
  })  

  it("has 'SOCCER' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/SOCCER/i)).toBeInTheDocument
  })  

  it("has 'HIKING' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/HIKING/i)).toBeInTheDocument
  })  

  it("has 'CYCLING' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/CYCLING/i)).toBeInTheDocument
  })  

  it("has 'DANCING' text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/DANCING/i)).toBeInTheDocument
  })  

//This is where the testing for the open modal links begins
  it("has 'weight lifting' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /weight lifting/i,
      hidden: true
    })).toBeInTheDocument
  })  

  it("has 'running' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /running/i,
      hidden: true
    })).toBeInTheDocument
  })  

  it("has 'yoga' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /yoga/i,
      hidden: true
    })).toBeInTheDocument
  })  

  it("has 'BASKETBALL' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /dancing/i,
      hidden: true
    })).toBeInTheDocument
  })  

  it("has 'SOCCER' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /SOCCER/i,
      hidden: true
    })).toBeInTheDocument
  })  

  it("has 'HIKING' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /HIKING/i,
      hidden: true
    })).toBeInTheDocument
  })  

  it("has 'CYCLING' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /CYCLING/i,
      hidden: true
    })).toBeInTheDocument
  })  

  it("has 'DANCING' text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /dancing/i,
      hidden: true
    })).toBeInTheDocument
  })  

})
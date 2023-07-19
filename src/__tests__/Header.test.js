import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// import BrowseActivityModal from '../components/BrowseActivity/BrowseActivityModal';
import Header from '../components/Header/Header';

describe("<Header />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )})

  it("has a button", () => {
    // screen.logTestingPlaygroundURL()
    expect(screen.getByRole('button', {
      name: /\+/i
    })).toBeInTheDocument
  })

  it("has a '+' symbol", () => {
    // screen.logTestingPlaygroundURL()
    expect(screen.getByText(/\+/i)).toBeInTheDocument
  })

  it("has Home text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/\home/i)).toBeInTheDocument
  })

  it("has Friends text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /friends/i
    })).toBeInTheDocument
  })

  it("has Search text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /friends/i
    })).toBeInTheDocument
  })

  it("has BuddyProfile text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /buddyprofile/i
    })).toBeInTheDocument
  })

  it("has log out text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /log out/i
    })).toBeInTheDocument
  })

  it("has BUDDY text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /buddy/i
    })).toBeInTheDocument
  })


})

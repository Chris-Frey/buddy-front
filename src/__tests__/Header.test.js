import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

describe("<Header />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Header />
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

  it("has Home text", () => {
    expect(screen.getByText(/\home/i)).toBeInTheDocument
  })

  it("has Friends text", () => {
    expect(screen.getByRole('link', {
      name: /friends/i
    })).toBeInTheDocument
  })

  it("has Search text", () => {
    expect(screen.getByRole('link', {
      name: /friends/i
    })).toBeInTheDocument
  })

  it("has BuddyProfile text", () => {
    expect(screen.getByRole('link', {
      name: /buddyprofile/i
    })).toBeInTheDocument
  })

  it("has log out text", () => {
    expect(screen.getByRole('link', {
      name: /log out/i
    })).toBeInTheDocument
  })

  it("has BUDDY text", () => {
    expect(screen.getByRole('link', {
      name: /buddy/i
    })).toBeInTheDocument
  })


})

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AddActivityModal from '../components/AddActivityModal/AddActivityModal';

describe("<AddActivityModal />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <AddActivityModal />
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

  it("has create an activity text", () => {
    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/create an activity/i)).toBeInTheDocument
  })  

  it("has cancel text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i
    }))
    expect(screen.getByText(/close/i)).toBeInTheDocument
  })  

  it("has event text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i,
      hidden: true
    }))
    expect(screen.getByText(/event/i)).toBeInTheDocument
  })  

  it("has time text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i,
      hidden: true
    }))
    expect(screen.getByText(/time/i)).toBeInTheDocument
  })  

  it("has location text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i,
      hidden: true
    }))
    expect(screen.getByText(/location/i)).toBeInTheDocument
  })  

  it("has info text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i,
      hidden: true
    }))
    expect(screen.getByText(/info/i)).toBeInTheDocument
  })  

  it("has duration text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i,
      hidden: true
    }))
    expect(screen.getByText(/duration/i)).toBeInTheDocument
  })  

  it("has close text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i,
      hidden: true
    }))
    expect(screen.getByText(/close/i)).toBeInTheDocument
  })  

  it("has create activity text", () => {

    userEvent.click(screen.getByRole('button', {
      name: /\+/i,
      hidden: true
    }))
    expect(screen.getByText(/create activity/i)).toBeInTheDocument
  })  








})
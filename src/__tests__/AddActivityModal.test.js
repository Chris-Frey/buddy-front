import { render, screen } from '@testing-library/react';
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
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('button', {
      name: /\+/i
    })).toBeInTheDocument
  })

  it("has a '+' symbol", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/\+/i)).toBeInTheDocument
  })

  it("has create an activity text", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/create an activity/i)).toBeInTheDocument
  })  
})
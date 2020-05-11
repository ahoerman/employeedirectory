import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/EmployeeCard/search";
import employees from "./employee.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  handleUserInput = userinput => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee === userinput);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };


  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search userinput={this.state.userinput} handler={this.handleUserInput}/>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

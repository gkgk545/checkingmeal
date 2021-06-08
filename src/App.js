import React from "react";
import axios from "axios";

class App extends React.Component {
  state = { mealTable: [], isLoading: true };

  getMealTable = async () => {
    const mealTable =
      await axios.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=d3d58b2620354978825b4f3bb4128595&Type=json&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7731063
    `);
    this.setState({ mealTable: mealTable.request.response, isLoading: false });
  };

  componentDidMount() {
    this.getMealTable();
  }

  render() {
    const { isLoading, mealTable } = this.state;
    return <div>{isLoading ? "Loading" : console.log(mealTable)}</div>;
  }
}

export default App;

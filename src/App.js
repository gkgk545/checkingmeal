import React from "react";
import axios from "axios";

class App extends React.Component {
  state = { mealTable: [], isLoading: true };

  getMealTable = async () => {
    let day = new Date();
    let year = day.getFullYear();
    let month = day.getMonth() + 1;
    let date = day.getDate();

    if (month + 1 < 10) {
      month = `0${month}`;
    }

    if (date < 10) {
      date = `0${date}`;
    }

    const today = `${year}` + `${month}` + `${date}`;

    const mealTable = await axios.get(
      `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=d3d58b2620354978825b4f3bb4128595&Type=json&ATPT_OFCDC_SC_CODE=J10` +
        `&SD_SCHUL_CODE=7731063&MLSV_YMD=20210611`
    );
    this.setState({ mealTable: mealTable.request.response, isLoading: false });
  };

  componentDidMount() {
    this.getMealTable();
  }

  render() {
    const { isLoading, mealTable } = this.state;
    return <div>{isLoading ? "Loading" : <p>{mealTable}</p>}</div>;
  }
}

export default App;

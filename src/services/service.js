import axios from "axios";

const ax = axios.create({
  baseURL: "http://localhost:8080/data",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getData() {
    return ax.get("db.json");
  }
};

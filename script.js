const table = document.querySelector(".body");
const API_URL =
  "https://api.steinhq.com/v1/storages/64224443d27cdd09f0eb1eac/21a3";

const getData = async (api) => {
  let x = "";
  const data = await fetch(API_URL);
  const values = await data.json();
  values.forEach((value) => {
    x += `
        <tr>
            <td>${value["NO"]}</td>
            <td>${value["NaMa"]}</td>
            <td>${value["NIM"]}</td>
            <td>${value["1"]}</td>
            <td>${value["2"]}</td>
            <td>${value["3"]}</td>
        </tr>
    `;
  });
  table.innerHTML = x;
};

getData(API_URL);

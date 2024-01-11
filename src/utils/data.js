/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// const getInitialData = (i) => (
  import axios from "axios";
  // [
  // {
  //   id: 1,
  //   title: "Babel",
  //   body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
  //   createdAt: '2024-01-14T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 2,
  //   title: "Functional Component",
  //   body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
  //   createdAt: '2024-01-14T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 3,
  //   title: "Modularization",
  //   body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
  //   createdAt: '2024-01-14T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 4,
  //   title: "ESM",
  //   body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
  //   createdAt: '2024-0-14T04:27:34.572Z',
  //   archived: false,
  // }
  
// ]
// );

const getInitialData = []

const user_id = localStorage.getItem('id')
// console.log(user_id)

axios.get(`http://127.0.0.1:5000/api/v1/notes/all/${user_id}`)
.then((res) => {
  // console.log(res.data.values)
  const resData = res.data.values.map(
    (item) => ({
      id: item.id,
      title: item.title,
      body: item.body,
      createdAt: item.createdAt,
      archived: item.archived,
    })
  );

  // console.log(resData)
  resData.forEach((item) => {
    getInitialData.push(item)
  })

  return resData;
})

// await fetch(`http://127.0.0.1:5000/api/v1/notes/all/${user_id}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.values)
//       const resData = data.values.map(
//         (item) => ({
//           id: item.id,
//           title: item.title,
//           body: item.body,
//           createdAt: item.createdAt,
//           archived: item.archived,
//         })
//       );

//       console.log(resData)
//       resData.forEach((item) => {
//         getInitialData.push(item)
//       })

//       return resData;
//     });

// console.log(getInitialData)
    





const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("en-US", options)
}

export { getInitialData, showFormattedDate };

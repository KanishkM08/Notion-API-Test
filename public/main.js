const getDataFromBackend = async () => {
    const rest = await fetch("http://localhost:8000/users");
    const data = await rest.json();
  
    return data;
  };
  
  // Note that top-level await is only available in modern browsers
  // https://caniuse.com/mdn-javascript_operators_await_top_level
  const res = await getDataFromBackend();
  console.log(res);
  
// Add data to HTML
const addData = async () => {
    const data = await getDataFromBackend();
  
    data.forEach((value) => {
      const div = document.createElement("div");
      div.classList.add("userContainer");
      div.innerHTML = `
          <h3>${value.name}</h3>
          <p>${value.attendance}</p>
          <p>${value.present}</p>
          <p>${value.email}</p>
      `;
  
      container.append(div);
    });
  };
  
  addData();

  if(value.present = 12){
  emailjs.send("service_qv3uqvp","template_q8f2u4t",{
    from_name: "Sheetal Malhotra",
    to_name: value.name,
    PresentDays: value.present
    });
  };
function mainFunc() {
  const imgPais = document.querySelector(".imgpais");
  const nomePais = document.querySelector(".pais");
  const descricaoPais = document.querySelector(".descPais");
  const botao = document.querySelector(".botao");

  const countries = [
    {
      name: "Japan",
      timezone: "Asia/Tokyo",
      img: "./images/img1.jpg",
      description:
        "Known for its traditional arts, tea ceremonies, and advanced technology.",
    },
    {
      name: "Brazil",
      timezone: "America/Sao_Paulo",
      img: "./images/img2.jpg",
      description:
        "Famous for its carnival, soccer, and the Amazon rainforest.",
    },
    {
      name: "Ukraine",
      timezone: "Europe/Kiev",
      img: "./images/img3.jpg",
      description:
        "Rich in history, culture, and known for its beautiful landscapes.",
    },
    {
      name: "Canada",
      timezone: "America/Toronto",
      img: "./images/img4.jpg",
      description:
        "Known for its natural beauty, multicultural cities, and friendly people.",
    },
    {
      name: "Australia",
      timezone: "Australia/Sydney",
      img: "./images/img5.jpg",
      description:
        "Famous for its unique wildlife, the Great Barrier Reef, and iconic Sydney Opera House.",
    },
    {
      name: "France",
      timezone: "Europe/Paris",
      img: "./images/img6.jpg",
      description:
        "Renowned for its cuisine, fashion, art, and the Eiffel Tower.",
    },
    {
      name: "India",
      timezone: "Asia/Kolkata",
      img: "./images/img7.jpg",
      description:
        "Known for its diverse culture, spicy food, and historical landmarks like the Taj Mahal.",
    },
    {
      name: "Germany",
      timezone: "Europe/Berlin",
      img: "./images/img8.jpg",
      description: "Famous for its history, beer, and engineering prowess.",
    },
    {
      name: "South Africa",
      timezone: "Africa/Johannesburg",
      img: "./images/img9.jpg",
      description:
        "Known for its diverse ecosystems, wildlife, and Nelson Mandela's legacy.",
    },
    {
      name: "China",
      timezone: "Asia/Shanghai",
      img: "./images/img10.jpg",
      description:
        "Famous for its ancient civilization, the Great Wall, and rapid modernization.",
    },
    {
      name: "Italy",
      timezone: "Europe/Rome",
      img: "./images/img11.jpg",
      description:
        "Renowned for its rich history, art, cuisine, and landmarks like the Colosseum.",
    },
    {
      name: "United States",
      timezone: "America/New_York",
      img: "./images/img12.jpg",
      description:
        "Known for its cultural influence, diverse landscapes, and economic power.",
    },
    {
      name: "Mexico",
      timezone: "America/Mexico_City",
      img: "./images/img13.jpg",
      description:
        "Famous for its vibrant culture, cuisine, and ancient ruins like Chichen Itza.",
    },
    {
      name: "Russia",
      timezone: "Europe/Moscow",
      img: "./images/img14.jpg",
      description:
        "Known for its vast territory, rich history, and cultural contributions.",
    },
    {
      name: "United Kingdom",
      timezone: "Europe/London",
      img: "./images/img15.jpg",
      description:
        "Famous for its monarchy, historical sites, and influential culture.",
    },
  ];

  let random = Math.floor(Math.random() * countries.length);
  let selectedCountry = countries[random];

  function getLocalTime(timezone) {
    return new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
  }

  const timeElement = document.getElementById("clock");

  function updateTime() {
    let localTime = getLocalTime(selectedCountry.timezone);
    const hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const seconds = localTime.getSeconds();

    const clockStr = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timeElement.innerText = clockStr;

    if (hours >= 6 && hours < 18) {
      botao.classList.remove("dark");
      imgPais.classList.remove("dark");
      nomePais.classList.remove("dark");
      document.body.classList.remove("dark");
      timeElement.classList.remove("dark");
    } else {
      botao.classList.add("dark");
      imgPais.classList.add("dark");
      nomePais.classList.add("dark");
      document.body.classList.add("dark");
      timeElement.classList.add("dark");
    }
  }

  imgPais.src = selectedCountry.img;
  nomePais.textContent = selectedCountry.name;
  descricaoPais.textContent = selectedCountry.description;

  updateTime();
  setInterval(updateTime, 1000);

  botao.addEventListener("click", function refreshPage() {
    location.reload();
})

}

mainFunc()

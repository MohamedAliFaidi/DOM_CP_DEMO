document.addEventListener("DOMContentLoaded", async () => {
  fetch("http://localhost:3000").then(async(data) => {
      const result = await data.json()
      console.log(result, "1");
  });

  const data = await fetch("http://localhost:3000");
  console.log(data, "2");
});

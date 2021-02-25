// const endpoint = `https://formspree.io/${process.env.REACT_APP_FORMSPREE_CONTACT_ID}`;

const endpoint2 = "https://formspree.io/f/xyybwvnz"
function submit(data) {
  return fetch(endpoint2, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
}

export default { submit };

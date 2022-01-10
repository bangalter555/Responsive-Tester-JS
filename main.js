const d = document,
  w = window;

const responsiveTester = (form) => {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    let target = e.target;
    if (target === $form) {
      e.preventDefault();
      tester = w.open(
        $form.url.value,
        "tester",
        `innerWidth=${$form.width.value},innerHeight=${$form.height.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
};

d.addEventListener("DOMContentLoaded", (e) => {
  responsiveTester("responsive-form");
});

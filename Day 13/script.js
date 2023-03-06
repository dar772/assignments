let body = document.getElementsByTagName("body")[0];
console.log(body);

let h1 = document.createElement("h1");
h1.innerText = "Countdown using SetTimeout and Callback hell";


let container = document.createElement("div");
 container.className = "container-fluid outer-container";

let innercontainer = document.createElement("div");
innercontainer.className = "container-fluid inner-container";

let p = document.createElement("p");
let em = document.createElement("em");
p.append(em);
innercontainer.append(p);
container.append(h1, innercontainer);
body.append(container);
let countDown = 10;

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            setTimeout(() => {
              setTimeout(() => {
                setTimeout(() => {
                  setTimeout(() => {
                    setTimeout(() => {
                      setTimeout(() => {
                        em.innerText = "Happy Indepndence Day!";
                        innercontainer.style.backgroundImage =
                          "url('imgs/Fireworks_Animation.gif')";
                      }, 1000);

                      em.innerText = countDown--;
                    }, 1000);

                    em.innerText = countDown--;
                  }, 1000);

                  em.innerText = countDown--;
                }, 1000);

                em.innerText = countDown--;
              }, 1000);

              em.innerText = countDown--;
            }, 1000);

            em.innerText = countDown--;
          }, 1000);

          em.innerText = countDown--;
        }, 1000);

        em.innerText = countDown--;
      }, 1000);

      em.innerText = countDown--;
    }, 1000);

    em.innerText = countDown--;
  }, 1000);

  em.innerText = countDown--;
}, 1000);

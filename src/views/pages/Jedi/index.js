import Logo from "../../../assets/images/logo/logo.png";

let Jedi = {
  is_private: false,

  render: async () => {
      let view = `
        <section id="section-one" class="section background--one">
          <div>
            <div class="container block-section--one">
              <h2>Caro Jedi, bem-vindo à Ordem!</h2><br/><br/>
              <a href="#">
                <img src="${Logo}" alt="Logo Star Wars">
              </a>
            </div>
          </div>
        </section>
      `;

      return view
  },

  after_render: async () => {}
}

export default Jedi;
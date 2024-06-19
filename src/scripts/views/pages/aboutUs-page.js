const AboutUs = {
  async render() {
    return `
      <div class="aboutUs">
      <div class="jumbotron">
      <h1>About Us</h1>
      <p>
        Di Rintara, kami berdedikasi untuk menyajikan sejarah dan keanekaragaman budaya yang kaya dari Indonesia. Kami berkomitmen untuk membangun kesadaran dan apresiasi terhadap warisan unik bangsa Indonesia. Melalui kumpulan artikel kami berusaha menyediakan sumber belajar yang dapat diakses oleh semua kalangan.
       </p>
      </div>
    
  <section class="vission">
    <img
      src="./images/desain2.webp"
      alt="Visi Kami Image"
      class="vission-image"
    />
    <div class="vission-card">
      <h2>Visi Kami</h2>
      <p>
          Visi kami adalah untuk melestarikan sejarah dan warisan budaya serta meningkatkan pengetahuan  menginspirasi generasi bangsa untuk mengeksplorasi, memahami, dan menghargai keberagaman yang menjadikan Indonesia unik.
      </p>
    </div>
  </section>

  <!-- section -->
  <section class="mission">
    <h2>Misi Kami</h2>
      <div class="mission-item">
          <div class="mission-image">
              <img
                  src="./images/teacher.jpg"
                  alt="Education Mission Image"
                  class="mission-image"
              />
              <figcaption>Pendikan</figcaption>
          </div>
        <div class="mission-content">
          <p>
            Kami membantu para guru, siswa, dan sekolah dengan menyediakan
            sumber daya yang dapat diandalkan, mudah dibaca
          </p>
        </div>
      </div>
      <div class="mission-item">
          <div class="mission-content">
          <p>
              Dengan menciptakan ensiklopedia yang menarik dan mengasyikkan, dapat menginspirasi publik untuk belajar lebih banyak tentang sejarah dan warisan budaya Indonesia.
          </p>
      </div>
      <div class="mission-image">
              <img
                  src="./images/writing.jpg"
                  alt="Public Awareness Mission Image"
                  class="mission-image"
              />
              <figcaption>Kesadaran Publik</figcaption>
          </div>
          
      </div>
    </div>
  </section>
      </div>
        `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const header = document.querySelector('.app-header');
    header.classList.add('scrolled');
  },
};

export default AboutUs;

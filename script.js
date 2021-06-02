// Script NavBar
const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', fixNav)

function fixNav() {
   if(window.scrollY > nav.offsetHeight + 50) {
       nav.classList.add('active');
   }else {
       nav.classList.remove('active');
   }
}

// Script Testimonial
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
      name: 'Miyah Myles',
      position: 'Pasien Diabetes',
      photo:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde est repellendus numquam, culpa beatae cupiditate molestias itaque, minima magnam suscipit optio modi animi eos laudantium, ipsum delectus quas vitae? Minima perferendis sed veniam nesciunt harum placeat nemo neque saepe deleniti, obcaecati esse eveniet earum, nihil beatae corporis cum provident. Quam rerum nemo qui dolorum magnam hic assumenda mollitia aperiam expedita!",
    },
    {
      name: 'Juniarti Suliastati',
      position: 'Pasien Sembelit',
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias deserunt harum aliquid, soluta blanditiis qui ratione pariatur at nesciunt eligendi eveniet, nam veritatis obcaecati sunt ex quam suscipit, laudantium autem. Reprehenderit impedit esse laboriosam voluptates, fuga eligendi. Animi, aliquid!',
    },
    {
      name: 'Ida Niskanen',
      position: 'Pasien Tinea Animus',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sint dignissimos enim, reprehenderit nulla voluptates autem ullam quisquam eos fugiat yoroshiku!",
    },
    {
      name: 'Kanjeng Reine',
      position: 'Pasien Demam',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sint dignissimos enim, reprehenderit nulla voluptates autem ullam quisquam eos fugiat. nam veritatis obcaecati sunt ex quam suscipit, laudantium autem. Reprehenderit impedit esse laboriosam voluptates, fuga eligendi",
    },
    {
      name: 'Jonathan David Legowo',
      position: 'Pasien Covid-19',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias deserunt harum aliquid, soluta blanditiis qui ratione pariatur at nesciunt eligendi eveniet, nam veritatis obcaecati sunt ex quam suscipit, laudantium autem. Reprehenderit impedit esse laboriosam voluptates, fuga eligendi. Animi, aliquid.",
    },
    {
      name: 'Sashanti Maliwarman',
      position: 'Pasien Jerawatan',
      photo:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
      text:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sint dignissimos enim, reprehenderit nulla voluptates autem ullam quisquam eos fugiat',
    },
    {
      name: 'Bagus Pratama',
      position: 'Pasien Tipes',
      photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum alias deserunt harum aliquid, soluta blanditiis qui ratione pariatur at nesciunt eligendi eveniet, nam veritatis obcaecati sunt ex quam suscipit, laudantium autem. Reprehenderit impedit esse laboriosam voluptates, fuga eligendi. Animi, aliquid.',
    },
  ]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000);
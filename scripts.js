document.addEventListener('DOMContentLoaded', () => {
    const organLists = document.querySelectorAll('.organ-list');
  
    organLists.forEach(organList => {
      organList.addEventListener('click', event => {
        const target = event.target;
        if (target.tagName === 'LI') {
          const description = target.getAttribute('data-description');
          const organDescriptionDiv = target.closest('section').querySelector('.organ-description');
          organDescriptionDiv.innerHTML = `<p>${description}</p>`;
        }
      });
    });
  });
  

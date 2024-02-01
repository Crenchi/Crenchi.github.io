const noClick = () => {
    const button = document.getElementById('No');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const newLeft = Math.random() * (viewportWidth - button.offsetWidth);
    const newTop = Math.random() * (viewportHeight - button.offsetHeight);

    console.log(newLeft);
    console.log(newTop);
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  };

<script>
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<script>
const bars = document.querySelectorAll('.progressbar span');

bars.forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0';
  setTimeout(() => bar.style.width = width, 500);
});
</script>

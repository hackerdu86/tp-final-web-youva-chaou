import "../styles/CustomLoader.css";

function CustomLoader() {
  return (
    <div class="spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle
          stroke-miterlimit="10"
          stroke-width="3"
          fill="none"
          r="20"
          cy="50"
          cx="50"
          class="path"
        ></circle>
      </svg>
    </div>
  );
}

export default CustomLoader;

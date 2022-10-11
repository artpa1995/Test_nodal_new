<template>
  <button class="btn">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: String,
  }
};
</script>

<style lang="scss">
.btn {
  position: relative;
  margin-top: 1rem;
  padding: .75rem 2.4rem;

  color: white;
  background: #C24DFEFF;

  border: 0;
  border-radius: 1rem;

  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  font-family: var( --font_texts);

  &:enabled:not(.loading):hover {
    box-shadow: 0 0 .2em var(--color3);
    cursor: pointer;
  }

  &:enabled:not(.loading):active {
    background: var(--color4);
  }

  &:disabled {
    background: #C4C4C4;
  }
}

.btn.outline {
  background: unset;
  box-shadow: 0px 0px 2px var(--color8), 0px 0px 6px rgba(225, 153, 252, 0.18), 0px 0px 6px rgba(225, 153, 252, 0.2) inset;
  color: var(--color5);
  opacity: 0.8;
  &:hover {
    background: linear-gradient(90deg, rgba(146, 64, 252, 0.63) 0%, rgba(225, 153, 252, 1) 100%);
    color: white;
    border: none;
    opacity: 1;
  }
}

.btn.light {
  background: rgb(246, 226, 253);
  box-shadow: 0px 0px 2px var(--color3), 0px 0px 6px rgba(225, 153, 252, 0.18), 0px 0px 6px rgba(225, 153, 252, 0.2) inset;
  color: var(--color6);
  &:hover {
    background: linear-gradient(90deg, rgba(146, 64, 252, 0.63) 0%, rgba(225, 153, 252, 1) 100%);
    color: white;
  }
}

.btn.loading {
  color: rgba(0, 0, 0, 0);
  user-select: none;
  background: var(--color-head_r1);
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    top: 50%;
    left: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: loading-animation 1s linear infinite;
  }
}

.btn.large {
  padding: 1em 5em;
}

.btn.modern {
  background: var(--color2);
  background: linear-gradient(90deg, var(--color1) 0%, var(--color2) 100%);
  border-radius: .3em;
  padding: .7em 2em;
}

@keyframes loading-animation {
  from {
    transform: translate(-50%, -47%) rotate(0turn);
  }
  to {
    transform: translate(-50%, -47%) rotate(1turn);
  }
}
@media (max-width: 767.98px) {
  .btn {
    padding: .6rem 2rem;
    font-size: 1rem;
  }
}
</style>

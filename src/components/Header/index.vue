<template>
  <header class="header">
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      @click="toggleMenu"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div class="container">
      <nav :class="['main-menu', { 'is-open': isMenuOpen }]">
        <ul>
          <li v-for="(item, i) in navitems" :key="i">
            <NavItem
              :href="item.href"
              :target="item.target"
              :classname="item.classname"
              >{{ item.content }}</NavItem
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import NavItem from "./components/NavItem.vue";
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      navitems: [
        {
          content: "Contacts:",
          classname: "bold",
        },
        {
          href: "https://t.me/sergeevoleg",
          target: "_blank",
          content: "Telegram",
        },
        {
          href: "https://github.com/0leg53",
          target: "_blank",
          content: "Github",
        },
        {
          href: "https://www.linkedin.com/in/sergeevoleg/",
          target: "_blank",
          content: "LinkedIn",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  components: {
    NavItem,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-shadow: 0px 2px 4px 3px var(--active-color-transparent);

  .navbar-burger {
    width: 2rem;
    height: 1.4rem;
    margin: 1rem;
    display: inline-block;
    cursor: pointer;
    @media (min-width: 769px) {
      display: none;
    }
    span {
      display: block;
      width: 100%;
      height: 0.25rem;
      background: var(--active-color);
      & + span {
        margin-top: 0.25rem;
      }
    }
  }
  .main-menu {
    padding: 0 0 1rem;
    display: none;
    &.is-open {
      display: block;
    }
    @media (min-width: 769px) {
      padding: 0;
      display: block;
    }
    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      padding: 0;
      margin: 0;
      @media (min-width: 769px) {
        flex-direction: row;
      }
      li {
        list-style: none;
      }
    }
  }
}
</style>

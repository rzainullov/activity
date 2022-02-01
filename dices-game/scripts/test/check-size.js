/* eslint-disable linebreak-style */
export const checkElements = {
  header: document.querySelector("[data-header]"),
  main: document.querySelector("[data-main]"),
  footer: document.querySelector("[data-footer]"),
  checkHeaderWidth() {
    return this.header.clientWidth;
  },
  checkHeaderHeight() {
    return this.header.clientHeight;
  },
  checkMainWidth() {
    return this.main.clientWidth;
  },
  checkMainHeight() {
    return this.main.clientHeight;
  },
  checkFooterWidth() {
    return this.footer.clientWidth;
  },
  checkFooterHeight() {
    return this.footer.clientHeight;
  }
};

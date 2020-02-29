const getBtn = label => {
  return cy.get("button").within(() => cy.contains(label));
};

describe("Movie App", () => {
  it("Navigate to base url", () => {
    cy.visit("/");
  });

  it("Should contain title netflixRoulette", () => {
    cy.contains("netflixRoulette");
  });

  describe("Movies list", () => {
    it("Should contain list of movies or empty message", () => {
      const movieList = cy.get("div > .movie-poster");
      if (!movieList) {
        cy.contains("No films found");
      } else {
        cy.contains("Titanic");
      }
    });

    it("should scroll to the page botom", () => {
      cy.get("#movie-scroller").scrollTo("bottom");
    });
  });

  describe("Buttons clicks", () => {
    it("should fill the input and click on the search button", () => {
      cy.get("input").type("Lord of the rings");
      getBtn("SEARCH").click();
    });

    it("should click on genre button", () => {
      getBtn("Genre").click();
    });

    it("should click on genre button", () => {
      getBtn("Title").click();
    });

    it("should click on genre button", () => {
      getBtn("Rating").click();
    });

    it("should click on genre button", () => {
      getBtn("Release Date").click();
    });
  });
});

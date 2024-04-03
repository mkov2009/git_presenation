"use strict";
const GitPresentationAbl = require("../../abl/git-presentation-abl.js");

class GitPresentationController {
  init(ucEnv) {
    return GitPresentationAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return GitPresentationAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return GitPresentationAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new GitPresentationController();

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", () => {
  let counter;

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy("Arnab hansda", 1); // Corrected "deploy"
  });

  describe("Deployment", () => {
    it("Stores the initial Count Value", async () => {
      // Corrected "initial"
      expect(await counter.count()).to.equal(1);
    });
    it("Stores the initial Name", async () => {
      // Corrected "initial"
      expect(await counter.name()).to.equal("Arnab hansda");
    });
  });

  describe("Counting", () => {
    let transaction;

    it("read the count from the  count public variable", async () => {
      expect(await counter.count()).to.equal(1);
    });
    it("read the count from the  getcount public variable", async () => {
      expect(await counter.getCount()).to.equal(1);
    });


    it("increment the Count", async () => {
      transaction = await counter.increment();
      await transaction.wait();
      expect(await counter.count()).to.equal(2);
      transaction = await counter.increment();
      await transaction.wait();
      expect(await counter.count()).to.equal(3);
    });

    it("decrement the Count", async () => {
      // Corrected "decrement"
      transaction = await counter.decrement(); // Corrected "decrement"
      await transaction.wait();
      expect(await counter.count()).to.equal(0);
      // cannot decrement value less than 0
      //   await expect(counter.decrement()).to.be.reverted;
    });
    it("read the count from the  Name public variable", async () => {
      expect(await counter.name()).to.equal("Arnab hansda");
    });
    it("read the count from the  getcount public variable", async () => {
      expect(await counter.getNAme()).to.equal("Arnab hansda");
    });

    
    it("Update the NAme", async () => {
      transaction = await counter.setName("new Name");
      await transaction.wait();
      expect(await counter.name()).to.equal("new Name");
    });
  });
});

# ava-compare

---
Base on this [Blog](https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e), Ava seems have some performance issue, so I want to compare it with other framworks.

In this project we only run single assertion for 1000 times per each framework.

## Mocha

    npm run mocha:sync -- --times=1000

    output: 454ms


    npm run mocha:async -- --times=1000
    output: 2m

## Ava

    npm run ava:sync
    output: 82ms

    npm run ava:async
    output: 294ms

## Jest

    npm run jest:sync
    output: 1.406s

    npm run jest:async
    output: 104.334s
---

## Conclusion

As we can see Ava is much faster than Mocha/Jest.

Especially in Async test case, Jest and mocha always run in serial, so it last minutes, but ava run all the async case in parallel. So it much faster.

Currently we only run very simple test case to compare the performance between these framwork, maybe we need more test cases get more details of the results.

# ava-compare

---
We run single assertion for 1000 times per each framework.

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

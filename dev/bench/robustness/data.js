window.BENCHMARK_DATA = {
  "lastUpdate": 1762342778410,
  "repoUrl": "https://github.com/merlinquantum/merlin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "94611630+CassNot@users.noreply.github.com",
            "name": "Cassandre Notton",
            "username": "CassNot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b9773bd5afa2b1c42150bcafd7cee824fc5bcf2",
          "message": "Merge pull request #69 from merlinquantum/release-0.2\n\nRelease 0.2\n\n**New features:**\n\n- Fidelity Kernel: with circuit/experiment/simple/builder support\n- Feedforward Blocks (experimental) - beta version\n- Quantum Bridge\n- Support Perceval experiments - detectors and noise\n- Remote Processing (first version)\n- MeasurementStrategy instead of OutputMapping\n- New API : CircuitBuilder\n- Support simple input_state and state_vector\n- Support amplitude_encoding\n- Introduce ComputationSpace\n\n**Breaking changes:**\n\n- Drop Ansatz \n- Separate Output Mapping strategy\n- no_bunching is now an option of computation_space",
          "timestamp": "2025-11-03T11:44:03-05:00",
          "tree_id": "b3354f1a947da38922c7e905fd7e4ec837363dfd",
          "url": "https://github.com/merlinquantum/merlin/commit/7b9773bd5afa2b1c42150bcafd7cee824fc5bcf2"
        },
        "date": 1762188357579,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 108.76166806967309,
            "unit": "iter/sec",
            "range": "stddev: 0.00030838198384487806",
            "extra": "mean: 9.194415806122029 msec\nrounds: 98"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 47.67744173574055,
            "unit": "iter/sec",
            "range": "stddev: 0.00046567440499114486",
            "extra": "mean: 20.974279734694065 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 19.12035685484556,
            "unit": "iter/sec",
            "range": "stddev: 0.0014147651263927792",
            "extra": "mean: 52.3002790999989 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 100.32447591157748,
            "unit": "iter/sec",
            "range": "stddev: 0.00011959278726983487",
            "extra": "mean: 9.967657352941124 msec\nrounds: 102"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 42.21827007400927,
            "unit": "iter/sec",
            "range": "stddev: 0.0003722353302230453",
            "extra": "mean: 23.686427659091304 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 16.279669748991594,
            "unit": "iter/sec",
            "range": "stddev: 0.0037005436834905126",
            "extra": "mean: 61.426307499999666 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 86.05955035602612,
            "unit": "iter/sec",
            "range": "stddev: 0.0002501558936209074",
            "extra": "mean: 11.619860850574119 msec\nrounds: 87"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 34.86839823069546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005547267978847298",
            "extra": "mean: 28.679264054053295 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 13.51282854614766,
            "unit": "iter/sec",
            "range": "stddev: 0.0025627013757129834",
            "extra": "mean: 74.00375107142817 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 67.40114916693129,
            "unit": "iter/sec",
            "range": "stddev: 0.001041132565262156",
            "extra": "mean: 14.836542289854982 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 25.959271716117957,
            "unit": "iter/sec",
            "range": "stddev: 0.00029352526517994684",
            "extra": "mean: 38.52188192857144 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 9.837833438890502,
            "unit": "iter/sec",
            "range": "stddev: 0.003013983116381707",
            "extra": "mean: 101.64839709999995 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 18.406615588747478,
            "unit": "iter/sec",
            "range": "stddev: 0.002108405550569332",
            "extra": "mean: 54.32829273684242 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 8.137394988544937,
            "unit": "iter/sec",
            "range": "stddev: 0.0039530346769055405",
            "extra": "mean: 122.88945066666992 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 3.408545530960584,
            "unit": "iter/sec",
            "range": "stddev: 0.0007328373202972727",
            "extra": "mean: 293.3802675999999 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 8.32109574437289,
            "unit": "iter/sec",
            "range": "stddev: 0.00020007334779991378",
            "extra": "mean: 120.17648044444702 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 3.5596477620610334,
            "unit": "iter/sec",
            "range": "stddev: 0.010680022563864761",
            "extra": "mean: 280.92667220000465 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 1.7241137821456094,
            "unit": "iter/sec",
            "range": "stddev: 0.00041259775447065767",
            "extra": "mean: 580.0081238000018 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.749769619338743,
            "unit": "iter/sec",
            "range": "stddev: 0.001772654366226555",
            "extra": "mean: 1.3337430248000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 18.213138967354936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004940400255982384",
            "extra": "mean: 54.90541755555651 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 7.799299822148053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183184955274927",
            "extra": "mean: 128.21663775000047 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "90058728+ben9871@users.noreply.github.com",
            "name": "Benjamin Stott",
            "username": "ben9871"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a77a37b7a1826add10f9d446ef120c6c5789203c",
          "message": "Merge pull request #70 from merlinquantum/bugfix/packaging\n\nfix docs dependency for pypi",
          "timestamp": "2025-11-04T11:56:57+01:00",
          "tree_id": "64a91c9c4c536a58ea3ef7a5e70eacbd91270b92",
          "url": "https://github.com/merlinquantum/merlin/commit/a77a37b7a1826add10f9d446ef120c6c5789203c"
        },
        "date": 1762253938359,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 105.82922080457622,
            "unit": "iter/sec",
            "range": "stddev: 0.0009077046853729024",
            "extra": "mean: 9.449186079207704 msec\nrounds: 101"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 47.60198035967764,
            "unit": "iter/sec",
            "range": "stddev: 0.00047037974669479057",
            "extra": "mean: 21.0075293599985 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 19.14912703811785,
            "unit": "iter/sec",
            "range": "stddev: 0.0014067089392923616",
            "extra": "mean: 52.22170170000027 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 97.6512458268617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007907352463450638",
            "extra": "mean: 10.240524752475018 msec\nrounds: 101"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 41.54288654521585,
            "unit": "iter/sec",
            "range": "stddev: 0.0007097773785534192",
            "extra": "mean: 24.071509785714728 msec\nrounds: 42"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 16.83806012698071,
            "unit": "iter/sec",
            "range": "stddev: 0.0016728414062172384",
            "extra": "mean: 59.38926411110953 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 85.77054571286936,
            "unit": "iter/sec",
            "range": "stddev: 0.00013137323138673419",
            "extra": "mean: 11.659014078651897 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 34.62231293968984,
            "unit": "iter/sec",
            "range": "stddev: 0.000383208015331556",
            "extra": "mean: 28.883107888890752 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 13.660066259576158,
            "unit": "iter/sec",
            "range": "stddev: 0.0019052528971895703",
            "extra": "mean: 73.2060870714274 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 66.82201629789857,
            "unit": "iter/sec",
            "range": "stddev: 0.0008494159037575965",
            "extra": "mean: 14.965127594203532 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 25.97307972438403,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286324144075168",
            "extra": "mean: 38.50140262963043 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 9.98002784126578,
            "unit": "iter/sec",
            "range": "stddev: 0.0033477489779221736",
            "extra": "mean: 100.20012127272469 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 18.57639768517965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007513795638205586",
            "extra": "mean: 53.83175021052684 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 8.114149677346452,
            "unit": "iter/sec",
            "range": "stddev: 0.0015446151496959642",
            "extra": "mean: 123.24150277777808 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 3.4012987215642827,
            "unit": "iter/sec",
            "range": "stddev: 0.0012599594899266467",
            "extra": "mean: 294.00534379999783 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 8.308863553221046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005320477609985864",
            "extra": "mean: 120.353402555556 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 3.5964912292059235,
            "unit": "iter/sec",
            "range": "stddev: 0.002826902505336943",
            "extra": "mean: 278.0487803999989 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 1.714276013246731,
            "unit": "iter/sec",
            "range": "stddev: 0.000583876961967517",
            "extra": "mean: 583.3366344000012 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.7410031529008386,
            "unit": "iter/sec",
            "range": "stddev: 0.00442828590360937",
            "extra": "mean: 1.3495219231999953 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 18.03358018539528,
            "unit": "iter/sec",
            "range": "stddev: 0.0006283049875082459",
            "extra": "mean: 55.45210599999785 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 7.730264465237695,
            "unit": "iter/sec",
            "range": "stddev: 0.0009432875053320002",
            "extra": "mean: 129.36168024999796 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "94611630+CassNot@users.noreply.github.com",
            "name": "Cassandre Notton",
            "username": "CassNot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8929e8383a044816615efb10b33ac00913000088",
          "message": "Merge pull request #74 from merlinquantum/bugfix/packaging\n\nadded missing packages",
          "timestamp": "2025-11-05T06:37:46-05:00",
          "tree_id": "04d767a9eab53f82709564a69e1564af7bbca635",
          "url": "https://github.com/merlinquantum/merlin/commit/8929e8383a044816615efb10b33ac00913000088"
        },
        "date": 1762342775702,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 109.50086715762644,
            "unit": "iter/sec",
            "range": "stddev: 0.00021347667469396813",
            "extra": "mean: 9.132347769999853 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 47.2296888083308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006209337625636807",
            "extra": "mean: 21.173122780000426 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 18.634931498634355,
            "unit": "iter/sec",
            "range": "stddev: 0.00354401095176642",
            "extra": "mean: 53.662660368420674 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 96.80049130662856,
            "unit": "iter/sec",
            "range": "stddev: 0.000749983156653395",
            "extra": "mean: 10.330526080000624 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 41.38662969142865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005773877937640923",
            "extra": "mean: 24.162392720929972 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 16.590066948108856,
            "unit": "iter/sec",
            "range": "stddev: 0.0013036235219052775",
            "extra": "mean: 60.27703222222335 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 84.66713903232764,
            "unit": "iter/sec",
            "range": "stddev: 0.0003959880899285065",
            "extra": "mean: 11.810957727273385 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 34.41862771698056,
            "unit": "iter/sec",
            "range": "stddev: 0.00042384853453555915",
            "extra": "mean: 29.054034583332506 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 13.460705438016745,
            "unit": "iter/sec",
            "range": "stddev: 0.0025945069827403413",
            "extra": "mean: 74.29031149999942 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 67.15978212203993,
            "unit": "iter/sec",
            "range": "stddev: 0.00031962735653784776",
            "extra": "mean: 14.889863671428268 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 25.697246579812827,
            "unit": "iter/sec",
            "range": "stddev: 0.0004247643516906763",
            "extra": "mean: 38.91467503703597 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 9.971407216429675,
            "unit": "iter/sec",
            "range": "stddev: 0.0032438438991270395",
            "extra": "mean: 100.28674772727376 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 17.863547257826525,
            "unit": "iter/sec",
            "range": "stddev: 0.002822067890705281",
            "extra": "mean: 55.97992300000056 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 8.10345924114639,
            "unit": "iter/sec",
            "range": "stddev: 0.00415837823561602",
            "extra": "mean: 123.40408833333389 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 3.4174758795594946,
            "unit": "iter/sec",
            "range": "stddev: 0.003645425076793724",
            "extra": "mean: 292.61362339999835 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 8.214604827886893,
            "unit": "iter/sec",
            "range": "stddev: 0.004816559430838414",
            "extra": "mean: 121.73440122222384 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 3.620048593374811,
            "unit": "iter/sec",
            "range": "stddev: 0.0016098923539340294",
            "extra": "mean: 276.23938579999674 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 1.7303464325312037,
            "unit": "iter/sec",
            "range": "stddev: 0.004513410991727164",
            "extra": "mean: 577.9189538000026 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.7424587536687632,
            "unit": "iter/sec",
            "range": "stddev: 0.00741188625303166",
            "extra": "mean: 1.3468761666000035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 17.984767441519583,
            "unit": "iter/sec",
            "range": "stddev: 0.0012115450557998613",
            "extra": "mean: 55.6026094444459 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 7.643443598351314,
            "unit": "iter/sec",
            "range": "stddev: 0.002658514054770479",
            "extra": "mean: 130.83108250000032 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1762188358517,
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
      }
    ]
  }
}
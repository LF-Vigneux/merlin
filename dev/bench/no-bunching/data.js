window.BENCHMARK_DATA = {
  "lastUpdate": 1762342747383,
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
        "date": 1762188331857,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config0]",
            "value": 213.06767536795493,
            "unit": "iter/sec",
            "range": "stddev: 0.00026860948913336717",
            "extra": "mean: 4.6933444891303235 msec\nrounds: 184"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config1]",
            "value": 106.54267779286928,
            "unit": "iter/sec",
            "range": "stddev: 0.00047044681131618813",
            "extra": "mean: 9.38591014151259 msec\nrounds: 106"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config2]",
            "value": 61.05897711022999,
            "unit": "iter/sec",
            "range": "stddev: 0.00007824087709604976",
            "extra": "mean: 16.37760813114665 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config3]",
            "value": 38.927530096462945,
            "unit": "iter/sec",
            "range": "stddev: 0.00014575433659090952",
            "extra": "mean: 25.688760564104285 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config0]",
            "value": 39.870655259672944,
            "unit": "iter/sec",
            "range": "stddev: 0.00011695399338686711",
            "extra": "mean: 25.08110271795425 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config1]",
            "value": 16.234547265554763,
            "unit": "iter/sec",
            "range": "stddev: 0.0034860830851562554",
            "extra": "mean: 61.597036470596535 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config2]",
            "value": 9.013147984602522,
            "unit": "iter/sec",
            "range": "stddev: 0.00020935026779915733",
            "extra": "mean: 110.9490271000027 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config3]",
            "value": 5.512275840133462,
            "unit": "iter/sec",
            "range": "stddev: 0.00039420522202152346",
            "extra": "mean: 181.4132726666647 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_compute_with_keys_benchmark[cpu-config0]",
            "value": 435.0115260872003,
            "unit": "iter/sec",
            "range": "stddev: 0.00008088234532958114",
            "extra": "mean: 2.2987896642525856 msec\nrounds: 414"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_compute_with_keys_benchmark[cpu-config1]",
            "value": 214.262901437112,
            "unit": "iter/sec",
            "range": "stddev: 0.00044049685951879627",
            "extra": "mean: 4.667163532710345 msec\nrounds: 214"
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
        "date": 1762253904985,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config0]",
            "value": 212.49120880296582,
            "unit": "iter/sec",
            "range": "stddev: 0.00006716040558255097",
            "extra": "mean: 4.706077044943812 msec\nrounds: 178"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config1]",
            "value": 105.89045875997445,
            "unit": "iter/sec",
            "range": "stddev: 0.00017460638667740781",
            "extra": "mean: 9.443721480768485 msec\nrounds: 104"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config2]",
            "value": 61.77245466195445,
            "unit": "iter/sec",
            "range": "stddev: 0.00010621132579299842",
            "extra": "mean: 16.188445245901786 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config3]",
            "value": 39.66423674399156,
            "unit": "iter/sec",
            "range": "stddev: 0.00024845843581447827",
            "extra": "mean: 25.211628461538027 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config0]",
            "value": 39.3635791798218,
            "unit": "iter/sec",
            "range": "stddev: 0.00015733621163515008",
            "extra": "mean: 25.404193948720266 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config1]",
            "value": 16.360320310435142,
            "unit": "iter/sec",
            "range": "stddev: 0.00040381586208997815",
            "extra": "mean: 61.12349764705815 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config2]",
            "value": 8.91138460335285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006925446995237672",
            "extra": "mean: 112.21600733333365 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config3]",
            "value": 5.438888195818481,
            "unit": "iter/sec",
            "range": "stddev: 0.000830274067090128",
            "extra": "mean: 183.86110616666448 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_compute_with_keys_benchmark[cpu-config0]",
            "value": 432.00639045451544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000515217734218063",
            "extra": "mean: 2.314780572916749 msec\nrounds: 384"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_compute_with_keys_benchmark[cpu-config1]",
            "value": 219.3544515844447,
            "unit": "iter/sec",
            "range": "stddev: 0.00007560515439024311",
            "extra": "mean: 4.558831575000113 msec\nrounds: 200"
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
        "date": 1762342746481,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config0]",
            "value": 218.48311330361253,
            "unit": "iter/sec",
            "range": "stddev: 0.00007099431033927631",
            "extra": "mean: 4.577012771739303 msec\nrounds: 184"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config1]",
            "value": 108.18864291082664,
            "unit": "iter/sec",
            "range": "stddev: 0.00013422826222864469",
            "extra": "mean: 9.243114370371016 msec\nrounds: 108"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config2]",
            "value": 62.44312186957997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002051676159484039",
            "extra": "mean: 16.014574064516204 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_no_bunching_computation_benchmark[cpu-config3]",
            "value": 40.82847008414516,
            "unit": "iter/sec",
            "range": "stddev: 0.0002701520345229111",
            "extra": "mean: 24.492712999998698 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config0]",
            "value": 39.469580812286964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005333853953230363",
            "extra": "mean: 25.335967076921627 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config1]",
            "value": 16.535579385852213,
            "unit": "iter/sec",
            "range": "stddev: 0.0024314875682746907",
            "extra": "mean: 60.475655352941345 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config2]",
            "value": 9.151405974243408,
            "unit": "iter/sec",
            "range": "stddev: 0.0004222810073945331",
            "extra": "mean: 109.27282680000161 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_fock_space_comparison_benchmark[cpu-config3]",
            "value": 5.5664225782636665,
            "unit": "iter/sec",
            "range": "stddev: 0.0012507405246422923",
            "extra": "mean: 179.64859583332782 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_compute_with_keys_benchmark[cpu-config0]",
            "value": 450.35328519958455,
            "unit": "iter/sec",
            "range": "stddev: 0.00014117494087772576",
            "extra": "mean: 2.2204789725400285 msec\nrounds: 437"
          },
          {
            "name": "benchmarks/benchmark_no_bunching.py::test_compute_with_keys_benchmark[cpu-config1]",
            "value": 228.0465306140979,
            "unit": "iter/sec",
            "range": "stddev: 0.00006132385410577928",
            "extra": "mean: 4.385070000000165 msec\nrounds: 224"
          }
        ]
      }
    ]
  }
}
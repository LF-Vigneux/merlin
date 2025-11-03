window.BENCHMARK_DATA = {
  "lastUpdate": 1762188332461,
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
      }
    ]
  }
}
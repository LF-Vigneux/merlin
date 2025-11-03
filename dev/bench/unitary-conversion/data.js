window.BENCHMARK_DATA = {
  "lastUpdate": 1762188363055,
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
        "date": 1762188362386,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-10]",
            "value": 167.93124341391191,
            "unit": "iter/sec",
            "range": "stddev: 0.00005528725084672234",
            "extra": "mean: 5.9548180533340656 msec\nrounds: 150"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-20]",
            "value": 40.74408590748768,
            "unit": "iter/sec",
            "range": "stddev: 0.00019057078608502665",
            "extra": "mean: 24.54343931707219 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-40]",
            "value": 9.986694926083738,
            "unit": "iter/sec",
            "range": "stddev: 0.00027666716472263015",
            "extra": "mean: 100.1332280000014 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-100]",
            "value": 1.5439291759915226,
            "unit": "iter/sec",
            "range": "stddev: 0.0027318892235076104",
            "extra": "mean: 647.6981040000055 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-10]",
            "value": 1776.2176209365807,
            "unit": "iter/sec",
            "range": "stddev: 0.00002738054423680039",
            "extra": "mean: 562.9940769716667 usec\nrounds: 1572"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-20]",
            "value": 956.6082201286503,
            "unit": "iter/sec",
            "range": "stddev: 0.00006112098477056023",
            "extra": "mean: 1.0453600324127614 msec\nrounds: 833"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-40]",
            "value": 497.8740104568924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004254821834537721",
            "extra": "mean: 2.0085402712270786 msec\nrounds: 424"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-100]",
            "value": 195.7801627176175,
            "unit": "iter/sec",
            "range": "stddev: 0.00007332088859902967",
            "extra": "mean: 5.10776978688257 msec\nrounds: 183"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-10]",
            "value": 24798.740796420854,
            "unit": "iter/sec",
            "range": "stddev: 0.00000470510471692359",
            "extra": "mean: 40.324628101452944 usec\nrounds: 9551"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-20]",
            "value": 23093.289011779914,
            "unit": "iter/sec",
            "range": "stddev: 0.000004973448434272718",
            "extra": "mean: 43.30262352365221 usec\nrounds: 6011"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-40]",
            "value": 19746.62443396218,
            "unit": "iter/sec",
            "range": "stddev: 0.000004696298275097302",
            "extra": "mean: 50.64156678242696 usec\nrounds: 2306"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-100]",
            "value": 6909.393888498842,
            "unit": "iter/sec",
            "range": "stddev: 0.000007191514450924631",
            "extra": "mean: 144.73049534266215 usec\nrounds: 3006"
          }
        ]
      }
    ]
  }
}
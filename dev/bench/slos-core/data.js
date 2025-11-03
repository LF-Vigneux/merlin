window.BENCHMARK_DATA = {
  "lastUpdate": 1762188349554,
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
        "date": 1762188348083,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 17059.501020078787,
            "unit": "iter/sec",
            "range": "stddev: 0.000028563941852182547",
            "extra": "mean: 58.61836162869092 usec\nrounds: 2898"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 5917.407564961606,
            "unit": "iter/sec",
            "range": "stddev: 0.00004597107044743252",
            "extra": "mean: 168.99292283351255 usec\nrounds: 4108"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 1466.6320982303334,
            "unit": "iter/sec",
            "range": "stddev: 0.00006430787063472888",
            "extra": "mean: 681.8342522345032 usec\nrounds: 1007"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 280.80042945437526,
            "unit": "iter/sec",
            "range": "stddev: 0.006215855766533987",
            "extra": "mean: 3.5612481146952124 msec\nrounds: 279"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 16204.135882683046,
            "unit": "iter/sec",
            "range": "stddev: 0.00003399819013583543",
            "extra": "mean: 61.71263973839389 usec\nrounds: 10398"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 5763.324020387233,
            "unit": "iter/sec",
            "range": "stddev: 0.00005473260940065148",
            "extra": "mean: 173.51098020215264 usec\nrounds: 4849"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 1440.8574488559545,
            "unit": "iter/sec",
            "range": "stddev: 0.00008496481231109683",
            "extra": "mean: 694.0311831638884 usec\nrounds: 1081"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 251.7704447053501,
            "unit": "iter/sec",
            "range": "stddev: 0.009196121955722666",
            "extra": "mean: 3.9718720804195735 msec\nrounds: 286"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 9384.949404476349,
            "unit": "iter/sec",
            "range": "stddev: 0.00000856650880968153",
            "extra": "mean: 106.55358456413512 usec\nrounds: 1490"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 6422.709848676211,
            "unit": "iter/sec",
            "range": "stddev: 0.000021730029506814852",
            "extra": "mean: 155.6975207600435 usec\nrounds: 4841"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 4270.504824279897,
            "unit": "iter/sec",
            "range": "stddev: 0.000011937371606137061",
            "extra": "mean: 234.16435319649185 usec\nrounds: 3457"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 2028.5358702644132,
            "unit": "iter/sec",
            "range": "stddev: 0.00001609730536070826",
            "extra": "mean: 492.96638755993655 usec\nrounds: 1672"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 9366.593624878984,
            "unit": "iter/sec",
            "range": "stddev: 0.000007918294938283246",
            "extra": "mean: 106.76239837542008 usec\nrounds: 5909"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 6193.017100670302,
            "unit": "iter/sec",
            "range": "stddev: 0.000025761955884833868",
            "extra": "mean: 161.47218451758593 usec\nrounds: 4883"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 4064.411022237037,
            "unit": "iter/sec",
            "range": "stddev: 0.00001158333116271979",
            "extra": "mean: 246.03810848087008 usec\nrounds: 3337"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1849.8794532786874,
            "unit": "iter/sec",
            "range": "stddev: 0.00001762523216650024",
            "extra": "mean: 540.5757646681361 usec\nrounds: 1568"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 9690.357348505977,
            "unit": "iter/sec",
            "range": "stddev: 0.000008108255860295452",
            "extra": "mean: 103.19536876049017 usec\nrounds: 6511"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 6788.184309805267,
            "unit": "iter/sec",
            "range": "stddev: 0.000009956718768980291",
            "extra": "mean: 147.31479794317593 usec\nrounds: 5251"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 9467.871849625448,
            "unit": "iter/sec",
            "range": "stddev: 0.000007904534052123822",
            "extra": "mean: 105.62035649432246 usec\nrounds: 5397"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 6467.1723922820465,
            "unit": "iter/sec",
            "range": "stddev: 0.00002646626261663837",
            "extra": "mean: 154.62708264795984 usec\nrounds: 5106"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 9388.173244837659,
            "unit": "iter/sec",
            "range": "stddev: 0.00000825202869838891",
            "extra": "mean: 106.51699472523872 usec\nrounds: 5877"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 6508.774827850695,
            "unit": "iter/sec",
            "range": "stddev: 0.000016006434294123547",
            "extra": "mean: 153.63874560862885 usec\nrounds: 4953"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 9323.378329835019,
            "unit": "iter/sec",
            "range": "stddev: 0.000008501030561107956",
            "extra": "mean: 107.2572585411425 usec\nrounds: 6498"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 6389.39748788467,
            "unit": "iter/sec",
            "range": "stddev: 0.000011111985955559594",
            "extra": "mean: 156.5092799275928 usec\nrounds: 4962"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 9051.527523664654,
            "unit": "iter/sec",
            "range": "stddev: 0.000008352070216639907",
            "extra": "mean: 110.47859020320742 usec\nrounds: 5022"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 6037.186308780406,
            "unit": "iter/sec",
            "range": "stddev: 0.00001714427407703217",
            "extra": "mean: 165.64007616356196 usec\nrounds: 4254"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 8966.225956576603,
            "unit": "iter/sec",
            "range": "stddev: 0.000008622644977342295",
            "extra": "mean: 111.52964523122617 usec\nrounds: 6469"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 5722.293517387189,
            "unit": "iter/sec",
            "range": "stddev: 0.000027473376920684733",
            "extra": "mean: 174.75510421852707 usec\nrounds: 4030"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 8633.2547254253,
            "unit": "iter/sec",
            "range": "stddev: 0.000009099087236507257",
            "extra": "mean: 115.83117049181438 usec\nrounds: 6100"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 5332.060039566106,
            "unit": "iter/sec",
            "range": "stddev: 0.000011283755707256867",
            "extra": "mean: 187.54477492368494 usec\nrounds: 3932"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 8455.334045559435,
            "unit": "iter/sec",
            "range": "stddev: 0.000008584891547809194",
            "extra": "mean: 118.26853848845619 usec\nrounds: 5755"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 5037.629278980856,
            "unit": "iter/sec",
            "range": "stddev: 0.000011461048977844777",
            "extra": "mean: 198.50607192800544 usec\nrounds: 3003"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 7991.087167559917,
            "unit": "iter/sec",
            "range": "stddev: 0.000009143254576041727",
            "extra": "mean: 125.1394183334069 usec\nrounds: 5400"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 4256.983959992257,
            "unit": "iter/sec",
            "range": "stddev: 0.00001324886914961305",
            "extra": "mean: 234.90809676478528 usec\nrounds: 3369"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 7475.006447090859,
            "unit": "iter/sec",
            "range": "stddev: 0.000027586323789800483",
            "extra": "mean: 133.77914883126053 usec\nrounds: 4663"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3991.7180667380553,
            "unit": "iter/sec",
            "range": "stddev: 0.000011661463165193673",
            "extra": "mean: 250.51869477775472 usec\nrounds: 3083"
          }
        ]
      }
    ]
  }
}
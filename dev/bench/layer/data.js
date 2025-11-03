window.BENCHMARK_DATA = {
  "lastUpdate": 1762188356560,
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
        "date": 1762188355328,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 255.2339860758208,
            "unit": "iter/sec",
            "range": "stddev: 0.00046606390191218373",
            "extra": "mean: 3.9179735245091383 msec\nrounds: 204"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 108.0003321975552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031812080796588",
            "extra": "mean: 9.259230778760855 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 48.22527650109519,
            "unit": "iter/sec",
            "range": "stddev: 0.0003709974210728314",
            "extra": "mean: 20.736013819999357 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 20.123470609030914,
            "unit": "iter/sec",
            "range": "stddev: 0.001111907312735052",
            "extra": "mean: 49.69321740908971 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 279.21048904381166,
            "unit": "iter/sec",
            "range": "stddev: 0.00011799818412379366",
            "extra": "mean: 3.581527339551658 msec\nrounds: 268"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 127.00438267121744,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241904462475769",
            "extra": "mean: 7.873744031249297 msec\nrounds: 128"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 67.58610473121273,
            "unit": "iter/sec",
            "range": "stddev: 0.00042077871989559736",
            "extra": "mean: 14.795940733335064 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 43.83212931736714,
            "unit": "iter/sec",
            "range": "stddev: 0.00040443040776611466",
            "extra": "mean: 22.814314877552174 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 271.03101837896895,
            "unit": "iter/sec",
            "range": "stddev: 0.00009803247937678371",
            "extra": "mean: 3.6896145909091143 msec\nrounds: 264"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 120.34451314934884,
            "unit": "iter/sec",
            "range": "stddev: 0.00028971718910269633",
            "extra": "mean: 8.309477298387417 msec\nrounds: 124"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 66.98933095164732,
            "unit": "iter/sec",
            "range": "stddev: 0.0002885045674940071",
            "extra": "mean: 14.927750222222654 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 42.423429631325675,
            "unit": "iter/sec",
            "range": "stddev: 0.00031027592574745666",
            "extra": "mean: 23.57188017777787 msec\nrounds: 45"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 250.22771594457006,
            "unit": "iter/sec",
            "range": "stddev: 0.00015631374484942136",
            "extra": "mean: 3.996359860558045 msec\nrounds: 251"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 117.42403738781398,
            "unit": "iter/sec",
            "range": "stddev: 0.0002386754587211947",
            "extra": "mean: 8.51614390243899 msec\nrounds: 123"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 64.94701412216003,
            "unit": "iter/sec",
            "range": "stddev: 0.0003408976722626201",
            "extra": "mean: 15.397166652174059 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 40.51268620240806,
            "unit": "iter/sec",
            "range": "stddev: 0.00027737260624830065",
            "extra": "mean: 24.683626136362204 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 250.98185910348315,
            "unit": "iter/sec",
            "range": "stddev: 0.0001142581434006763",
            "extra": "mean: 3.984351712000375 msec\nrounds: 250"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 112.25037169367582,
            "unit": "iter/sec",
            "range": "stddev: 0.00023444975306798226",
            "extra": "mean: 8.908656469565527 msec\nrounds: 115"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 60.94900117174901,
            "unit": "iter/sec",
            "range": "stddev: 0.00021437133183648205",
            "extra": "mean: 16.40715976923209 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 36.309752334323434,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537068213397576",
            "extra": "mean: 27.540810270267386 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 123.00071027845051,
            "unit": "iter/sec",
            "range": "stddev: 0.0002641467319143688",
            "extra": "mean: 8.130034352941442 msec\nrounds: 119"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 49.34040834264387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005851967864241594",
            "extra": "mean: 20.267363679998596 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 27.155086325146446,
            "unit": "iter/sec",
            "range": "stddev: 0.0018064571663354747",
            "extra": "mean: 36.825513571428765 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 11.671975847441987,
            "unit": "iter/sec",
            "range": "stddev: 0.0019148656757469722",
            "extra": "mean: 85.67529723077335 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 16.05858598141102,
            "unit": "iter/sec",
            "range": "stddev: 0.035609264607227416",
            "extra": "mean: 62.271983421054166 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 7.713883573005213,
            "unit": "iter/sec",
            "range": "stddev: 0.002922176419003495",
            "extra": "mean: 129.6363875000015 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}
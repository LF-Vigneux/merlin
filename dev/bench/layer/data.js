window.BENCHMARK_DATA = {
  "lastUpdate": 1762784000453,
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
        "date": 1762253919480,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 260.55385817547653,
            "unit": "iter/sec",
            "range": "stddev: 0.00011087879069893732",
            "extra": "mean: 3.837978094058868 msec\nrounds: 202"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 110.25552164122328,
            "unit": "iter/sec",
            "range": "stddev: 0.0001593742077933637",
            "extra": "mean: 9.069840540540433 msec\nrounds: 111"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 48.90929486538184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004474981616467467",
            "extra": "mean: 20.446011392157757 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 19.525282059039796,
            "unit": "iter/sec",
            "range": "stddev: 0.001216917148811912",
            "extra": "mean: 51.2156493809533 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 274.4412932194535,
            "unit": "iter/sec",
            "range": "stddev: 0.00036028372203631716",
            "extra": "mean: 3.643766534798984 msec\nrounds: 273"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 130.3775653458578,
            "unit": "iter/sec",
            "range": "stddev: 0.00008144702011975997",
            "extra": "mean: 7.670031246152357 msec\nrounds: 130"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 72.7878615196478,
            "unit": "iter/sec",
            "range": "stddev: 0.00023428383085499923",
            "extra": "mean: 13.738554466668422 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 44.43169426535644,
            "unit": "iter/sec",
            "range": "stddev: 0.0004135682535907931",
            "extra": "mean: 22.506456630435178 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 267.6963454801257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000900197308198359",
            "extra": "mean: 3.7355758376396744 msec\nrounds: 271"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 125.63708846330383,
            "unit": "iter/sec",
            "range": "stddev: 0.00038262439912432796",
            "extra": "mean: 7.959433096000795 msec\nrounds: 125"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 69.45827059033026,
            "unit": "iter/sec",
            "range": "stddev: 0.0017569366275694634",
            "extra": "mean: 14.397133581083095 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 43.03048495174408,
            "unit": "iter/sec",
            "range": "stddev: 0.0007525428469082091",
            "extra": "mean: 23.23933836956371 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 262.0125222500892,
            "unit": "iter/sec",
            "range": "stddev: 0.00005934970703289663",
            "extra": "mean: 3.8166114787655325 msec\nrounds: 259"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 122.75490726735596,
            "unit": "iter/sec",
            "range": "stddev: 0.00023255595250223365",
            "extra": "mean: 8.146313840000175 msec\nrounds: 125"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 66.5513604867927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745589820859226",
            "extra": "mean: 15.025988840580544 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 40.15277915831289,
            "unit": "iter/sec",
            "range": "stddev: 0.000520852418168798",
            "extra": "mean: 24.904876348838446 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 258.12690084352045,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729591195550333",
            "extra": "mean: 3.874063480916356 msec\nrounds: 262"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 117.4092971295124,
            "unit": "iter/sec",
            "range": "stddev: 0.0001679952467999412",
            "extra": "mean: 8.517213069565653 msec\nrounds: 115"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 62.19864171983805,
            "unit": "iter/sec",
            "range": "stddev: 0.000346043335901708",
            "extra": "mean: 16.077521507693206 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 35.93814332823218,
            "unit": "iter/sec",
            "range": "stddev: 0.0014382485858108194",
            "extra": "mean: 27.825588842104235 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 124.4881514044839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000760584586225167",
            "extra": "mean: 8.032892999999849 msec\nrounds: 121"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 50.46492589552623,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530133191806012",
            "extra": "mean: 19.815742959183677 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 28.164034320566987,
            "unit": "iter/sec",
            "range": "stddev: 0.0016761769295412599",
            "extra": "mean: 35.506276857138424 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 11.79219960382686,
            "unit": "iter/sec",
            "range": "stddev: 0.0021203774344839294",
            "extra": "mean: 84.80182100000032 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 16.21686543062567,
            "unit": "iter/sec",
            "range": "stddev: 0.03506105749792538",
            "extra": "mean: 61.66419794737228 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 7.814679654576105,
            "unit": "iter/sec",
            "range": "stddev: 0.001984516872078108",
            "extra": "mean: 127.96429849999313 msec\nrounds: 8"
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
        "date": 1762342776635,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 275.7075527025258,
            "unit": "iter/sec",
            "range": "stddev: 0.000026006157193889735",
            "extra": "mean: 3.6270315781989053 msec\nrounds: 211"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 116.84761652858055,
            "unit": "iter/sec",
            "range": "stddev: 0.00012860225219943168",
            "extra": "mean: 8.558154883333913 msec\nrounds: 120"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 51.70402326687315,
            "unit": "iter/sec",
            "range": "stddev: 0.0009179409428394038",
            "extra": "mean: 19.340854672729144 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 21.504025541426618,
            "unit": "iter/sec",
            "range": "stddev: 0.0012064822123512905",
            "extra": "mean: 46.50292095652237 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 295.91824797239457,
            "unit": "iter/sec",
            "range": "stddev: 0.000033892769411459255",
            "extra": "mean: 3.3793117080542032 msec\nrounds: 298"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 137.10084937594485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009480903700227728",
            "extra": "mean: 7.293900836878811 msec\nrounds: 141"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 77.25604904501255,
            "unit": "iter/sec",
            "range": "stddev: 0.00010433853757487382",
            "extra": "mean: 12.943970243901019 msec\nrounds: 82"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 48.777597726379945,
            "unit": "iter/sec",
            "range": "stddev: 0.0001748996285366148",
            "extra": "mean: 20.501214627451386 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 285.4626851242785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000641424391647008",
            "extra": "mean: 3.503084823729735 msec\nrounds: 295"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 135.45050444002706,
            "unit": "iter/sec",
            "range": "stddev: 0.00020671055479951436",
            "extra": "mean: 7.38277058571433 msec\nrounds: 140"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 75.76724388161483,
            "unit": "iter/sec",
            "range": "stddev: 0.00009967890086936084",
            "extra": "mean: 13.19831564102404 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 47.44522541920969,
            "unit": "iter/sec",
            "range": "stddev: 0.000166108897038728",
            "extra": "mean: 21.07693642857303 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 282.2778300900299,
            "unit": "iter/sec",
            "range": "stddev: 0.000033498659701871645",
            "extra": "mean: 3.5426090659725538 msec\nrounds: 288"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 132.885239615251,
            "unit": "iter/sec",
            "range": "stddev: 0.000049917274958327906",
            "extra": "mean: 7.525290264707711 msec\nrounds: 136"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 71.95028481258242,
            "unit": "iter/sec",
            "range": "stddev: 0.0007805774675527153",
            "extra": "mean: 13.898485636364338 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 44.47924521619956,
            "unit": "iter/sec",
            "range": "stddev: 0.0005054467707607417",
            "extra": "mean: 22.48239589361996 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 271.7463068114443,
            "unit": "iter/sec",
            "range": "stddev: 0.000044896319520736304",
            "extra": "mean: 3.6799028172032036 msec\nrounds: 279"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 124.27552279562954,
            "unit": "iter/sec",
            "range": "stddev: 0.00017011630904531323",
            "extra": "mean: 8.046636839697669 msec\nrounds: 131"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 67.65690217221906,
            "unit": "iter/sec",
            "range": "stddev: 0.00022374410683901838",
            "extra": "mean: 14.78045798571332 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 38.64014013704349,
            "unit": "iter/sec",
            "range": "stddev: 0.0008676915863704467",
            "extra": "mean: 25.879823325001894 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 128.96437367469755,
            "unit": "iter/sec",
            "range": "stddev: 0.00042809339244410504",
            "extra": "mean: 7.754079452379779 msec\nrounds: 126"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 54.00410840083861,
            "unit": "iter/sec",
            "range": "stddev: 0.00010701357657490646",
            "extra": "mean: 18.517109709091528 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 29.578812992953637,
            "unit": "iter/sec",
            "range": "stddev: 0.0009921380325867923",
            "extra": "mean: 33.80798276922821 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 12.4010785282869,
            "unit": "iter/sec",
            "range": "stddev: 0.0018408150459819062",
            "extra": "mean: 80.63814753845779 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 19.53640043619305,
            "unit": "iter/sec",
            "range": "stddev: 0.0017493829098995067",
            "extra": "mean: 51.18650200000019 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 7.156990166361835,
            "unit": "iter/sec",
            "range": "stddev: 0.04760773732147963",
            "extra": "mean: 139.72353974999763 msec\nrounds: 8"
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
          "id": "a88c36bf22970a3da63e4f7e4f8a2c6a0c0be8a2",
          "message": "Merge pull request #91 from merlinquantum/docs_0.2\n\nDocs 0.2",
          "timestamp": "2025-11-10T15:11:36+01:00",
          "tree_id": "5c6c6fedc288f2d374f3f4d974ddb21b1e939401",
          "url": "https://github.com/merlinquantum/merlin/commit/a88c36bf22970a3da63e4f7e4f8a2c6a0c0be8a2"
        },
        "date": 1762783999771,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 270.53459423290104,
            "unit": "iter/sec",
            "range": "stddev: 0.00016577573714302002",
            "extra": "mean: 3.6963849404749625 msec\nrounds: 168"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 113.56809692234393,
            "unit": "iter/sec",
            "range": "stddev: 0.00024247722299484674",
            "extra": "mean: 8.805289752136856 msec\nrounds: 117"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 49.41718434339879,
            "unit": "iter/sec",
            "range": "stddev: 0.0005554135140636595",
            "extra": "mean: 20.235875703703087 msec\nrounds: 54"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 20.057309970587205,
            "unit": "iter/sec",
            "range": "stddev: 0.0011191677873301853",
            "extra": "mean: 49.85713445454239 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 286.96002231495424,
            "unit": "iter/sec",
            "range": "stddev: 0.000356469452468131",
            "extra": "mean: 3.4848059737828065 msec\nrounds: 267"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 134.2759279683386,
            "unit": "iter/sec",
            "range": "stddev: 0.00019796286328688668",
            "extra": "mean: 7.447351250000622 msec\nrounds: 136"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 73.37010349437627,
            "unit": "iter/sec",
            "range": "stddev: 0.00041904736664071364",
            "extra": "mean: 13.629529636368154 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 45.62369771293348,
            "unit": "iter/sec",
            "range": "stddev: 0.0004238518333833673",
            "extra": "mean: 21.918433843132327 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 286.0710918464602,
            "unit": "iter/sec",
            "range": "stddev: 0.00005118598643881182",
            "extra": "mean: 3.4956345765154033 msec\nrounds: 281"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 130.7194788605181,
            "unit": "iter/sec",
            "range": "stddev: 0.00032930957772767127",
            "extra": "mean: 7.649969298508542 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 71.01564745051047,
            "unit": "iter/sec",
            "range": "stddev: 0.0004165317800721762",
            "extra": "mean: 14.081403689192332 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 42.957415479566635,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893821188313863",
            "extra": "mean: 23.278867893615843 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 275.1180735221013,
            "unit": "iter/sec",
            "range": "stddev: 0.00011229667299152027",
            "extra": "mean: 3.6348030036625936 msec\nrounds: 273"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 120.5527139632444,
            "unit": "iter/sec",
            "range": "stddev: 0.0007363726756574921",
            "extra": "mean: 8.295126398439212 msec\nrounds: 128"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 68.30526691590005,
            "unit": "iter/sec",
            "range": "stddev: 0.0003432999612090898",
            "extra": "mean: 14.640159465758867 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 41.181455455966244,
            "unit": "iter/sec",
            "range": "stddev: 0.0004911159328344632",
            "extra": "mean: 24.282774586956055 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 261.94413312623885,
            "unit": "iter/sec",
            "range": "stddev: 0.00018004001406385722",
            "extra": "mean: 3.817607930611943 msec\nrounds: 245"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 119.08164674634462,
            "unit": "iter/sec",
            "range": "stddev: 0.0003112909876318518",
            "extra": "mean: 8.397599691664462 msec\nrounds: 120"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 60.80265656677845,
            "unit": "iter/sec",
            "range": "stddev: 0.0016550541882525752",
            "extra": "mean: 16.44664980882403 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 37.3076013983576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006366215991246638",
            "extra": "mean: 26.804189026315246 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 122.26822096677267,
            "unit": "iter/sec",
            "range": "stddev: 0.00021093306878814343",
            "extra": "mean: 8.178740085469615 msec\nrounds: 117"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 49.32484244447177,
            "unit": "iter/sec",
            "range": "stddev: 0.0006364384407347448",
            "extra": "mean: 20.27375963999816 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 27.686088109269786,
            "unit": "iter/sec",
            "range": "stddev: 0.0018917496218055238",
            "extra": "mean: 36.119223346153504 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 11.84289654005646,
            "unit": "iter/sec",
            "range": "stddev: 0.002792965501048719",
            "extra": "mean: 84.438802333338 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 17.792179068003822,
            "unit": "iter/sec",
            "range": "stddev: 0.0077884807457542626",
            "extra": "mean: 56.20447030000548 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 6.971647830416637,
            "unit": "iter/sec",
            "range": "stddev: 0.050097381022409126",
            "extra": "mean: 143.43811166667012 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}
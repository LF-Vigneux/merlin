window.BENCHMARK_DATA = {
  "lastUpdate": 1762784002214,
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
        "date": 1762253920542,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 17159.9718817772,
            "unit": "iter/sec",
            "range": "stddev: 0.000029953481785791356",
            "extra": "mean: 58.27515376420496 usec\nrounds: 2816"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 6039.217743632832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000483079655834205",
            "extra": "mean: 165.58435917537557 usec\nrounds: 4850"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 1484.7230012311404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006901079799267261",
            "extra": "mean: 673.52630704232 usec\nrounds: 1065"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 257.61918152812603,
            "unit": "iter/sec",
            "range": "stddev: 0.0087496625389796",
            "extra": "mean: 3.881698536841377 msec\nrounds: 285"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 16495.31164037564,
            "unit": "iter/sec",
            "range": "stddev: 0.00003214770202713742",
            "extra": "mean: 60.62328628895354 usec\nrounds: 8949"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 5386.3122763083375,
            "unit": "iter/sec",
            "range": "stddev: 0.00006931756412991552",
            "extra": "mean: 185.65577870382563 usec\nrounds: 3240"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 1345.9022294188562,
            "unit": "iter/sec",
            "range": "stddev: 0.0026827222960445736",
            "extra": "mean: 742.9960201728676 usec\nrounds: 1388"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 281.4665722865053,
            "unit": "iter/sec",
            "range": "stddev: 0.006752018651109474",
            "extra": "mean: 3.552819760714243 msec\nrounds: 280"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 9235.903094345189,
            "unit": "iter/sec",
            "range": "stddev: 0.00000937513504214426",
            "extra": "mean: 108.27311523139129 usec\nrounds: 1753"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 6440.023680219584,
            "unit": "iter/sec",
            "range": "stddev: 0.000012848696786719651",
            "extra": "mean: 155.27893213676867 usec\nrounds: 3566"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 4046.8633589701953,
            "unit": "iter/sec",
            "range": "stddev: 0.00006743326546307535",
            "extra": "mean: 247.10495791349618 usec\nrounds: 3374"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 2012.4819097131392,
            "unit": "iter/sec",
            "range": "stddev: 0.000016594974046808384",
            "extra": "mean: 496.89887654321365 usec\nrounds: 1782"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 9203.439500978804,
            "unit": "iter/sec",
            "range": "stddev: 0.000009907307511869544",
            "extra": "mean: 108.65503053436142 usec\nrounds: 6026"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 6275.9480415055705,
            "unit": "iter/sec",
            "range": "stddev: 0.00001592553034184831",
            "extra": "mean: 159.33847657542188 usec\nrounds: 4824"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 4021.563803158382,
            "unit": "iter/sec",
            "range": "stddev: 0.00001552677774926609",
            "extra": "mean: 248.65948893180268 usec\nrounds: 3117"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1851.4477591328643,
            "unit": "iter/sec",
            "range": "stddev: 0.000014015748088582943",
            "extra": "mean: 540.117859154911 usec\nrounds: 1207"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 9443.906709434967,
            "unit": "iter/sec",
            "range": "stddev: 0.000009132055997635768",
            "extra": "mean: 105.88838187070893 usec\nrounds: 5549"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 6717.692244704019,
            "unit": "iter/sec",
            "range": "stddev: 0.000010811089111648792",
            "extra": "mean: 148.8606449318013 usec\nrounds: 5061"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 9435.837218786599,
            "unit": "iter/sec",
            "range": "stddev: 0.000008410834176310032",
            "extra": "mean: 105.97893719584481 usec\nrounds: 6783"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 6478.823416231689,
            "unit": "iter/sec",
            "range": "stddev: 0.000033241740496367704",
            "extra": "mean: 154.34901304682185 usec\nrounds: 5212"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 8964.951652144147,
            "unit": "iter/sec",
            "range": "stddev: 0.00002358001196297094",
            "extra": "mean: 111.54549838100131 usec\nrounds: 4015"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 6478.476805222142,
            "unit": "iter/sec",
            "range": "stddev: 0.00001507677739366654",
            "extra": "mean: 154.35727101684216 usec\nrounds: 4996"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 9227.185524991008,
            "unit": "iter/sec",
            "range": "stddev: 0.000013261119579096491",
            "extra": "mean: 108.37540843755545 usec\nrounds: 6400"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 6379.676984384992,
            "unit": "iter/sec",
            "range": "stddev: 0.000014217293375820063",
            "extra": "mean: 156.7477479577128 usec\nrounds: 5019"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 9093.708325356974,
            "unit": "iter/sec",
            "range": "stddev: 0.000013667526101746484",
            "extra": "mean: 109.96613968930491 usec\nrounds: 6629"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 6093.873180335695,
            "unit": "iter/sec",
            "range": "stddev: 0.000010120202349187954",
            "extra": "mean: 164.0992469660999 usec\nrounds: 4697"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 8964.458503439793,
            "unit": "iter/sec",
            "range": "stddev: 0.000009469419326158105",
            "extra": "mean: 111.5516346711054 usec\nrounds: 6553"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 5636.030705402242,
            "unit": "iter/sec",
            "range": "stddev: 0.000034528060794841145",
            "extra": "mean: 177.4298353345522 usec\nrounds: 4664"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 8624.416417158232,
            "unit": "iter/sec",
            "range": "stddev: 0.000009539171253814113",
            "extra": "mean: 115.94987436025295 usec\nrounds: 6057"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 5307.477289783996,
            "unit": "iter/sec",
            "range": "stddev: 0.000010803140364102028",
            "extra": "mean: 188.41342984638527 usec\nrounds: 4034"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 8484.537902329595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011351916336518312",
            "extra": "mean: 117.8614571013267 usec\nrounds: 6189"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 4988.015289722772,
            "unit": "iter/sec",
            "range": "stddev: 0.000030026808455451212",
            "extra": "mean: 200.48054023819537 usec\nrounds: 4113"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 7963.751569348554,
            "unit": "iter/sec",
            "range": "stddev: 0.000008791017144680143",
            "extra": "mean: 125.5689597160301 usec\nrounds: 5213"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 4265.912366057322,
            "unit": "iter/sec",
            "range": "stddev: 0.00001299033947660247",
            "extra": "mean: 234.4164422965464 usec\nrounds: 3414"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 7642.581551464945,
            "unit": "iter/sec",
            "range": "stddev: 0.000014123197155705729",
            "extra": "mean: 130.8458396244811 usec\nrounds: 5325"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3944.277243547921,
            "unit": "iter/sec",
            "range": "stddev: 0.000018965348075271997",
            "extra": "mean: 253.5318737129363 usec\nrounds: 2914"
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
        "date": 1762342764373,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 15310.104613397525,
            "unit": "iter/sec",
            "range": "stddev: 0.000033817110167458345",
            "extra": "mean: 65.31634010684178 usec\nrounds: 2805"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 5063.668150838327,
            "unit": "iter/sec",
            "range": "stddev: 0.000044603544000534994",
            "extra": "mean: 197.48529528627242 usec\nrounds: 4731"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 1226.743385510538,
            "unit": "iter/sec",
            "range": "stddev: 0.000058969595554331034",
            "extra": "mean: 815.1664087300757 usec\nrounds: 1008"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 233.8928079725145,
            "unit": "iter/sec",
            "range": "stddev: 0.005299034450849571",
            "extra": "mean: 4.275462801393676 msec\nrounds: 287"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 15056.011473764564,
            "unit": "iter/sec",
            "range": "stddev: 0.000030301279405014262",
            "extra": "mean: 66.41865289107426 usec\nrounds: 10792"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 5033.399748888586,
            "unit": "iter/sec",
            "range": "stddev: 0.00004624411065436432",
            "extra": "mean: 198.6728751716586 usec\nrounds: 4366"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 1216.5910438967735,
            "unit": "iter/sec",
            "range": "stddev: 0.00006625571661067257",
            "extra": "mean: 821.9688982724823 usec\nrounds: 1042"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 219.14205537027766,
            "unit": "iter/sec",
            "range": "stddev: 0.00770959283956693",
            "extra": "mean: 4.563250072243461 msec\nrounds: 263"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 9421.061163765453,
            "unit": "iter/sec",
            "range": "stddev: 0.000007496388259900799",
            "extra": "mean: 106.14515526617336 usec\nrounds: 1842"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 6617.666987251062,
            "unit": "iter/sec",
            "range": "stddev: 0.000009481829934277323",
            "extra": "mean: 151.1106560554498 usec\nrounds: 4178"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 4265.4498983928315,
            "unit": "iter/sec",
            "range": "stddev: 0.000022569851547992327",
            "extra": "mean: 234.44185814415206 usec\nrounds: 3567"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 2004.1773737066662,
            "unit": "iter/sec",
            "range": "stddev: 0.000045352016436552066",
            "extra": "mean: 498.9578333331494 usec\nrounds: 1050"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 9418.903751132775,
            "unit": "iter/sec",
            "range": "stddev: 0.000008094091957628287",
            "extra": "mean: 106.1694679574291 usec\nrounds: 5165"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 6479.895825472284,
            "unit": "iter/sec",
            "range": "stddev: 0.000009334234630245158",
            "extra": "mean: 154.3234686071694 usec\nrounds: 4157"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 4086.1876267185216,
            "unit": "iter/sec",
            "range": "stddev: 0.000012788582249818032",
            "extra": "mean: 244.7268924856165 usec\nrounds: 3460"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1868.7980349162995,
            "unit": "iter/sec",
            "range": "stddev: 0.00001960741015044512",
            "extra": "mean: 535.1033023987467 usec\nrounds: 1584"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 9528.712494381376,
            "unit": "iter/sec",
            "range": "stddev: 0.00001301225064770965",
            "extra": "mean: 104.94597256341316 usec\nrounds: 6597"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 6884.001811903637,
            "unit": "iter/sec",
            "range": "stddev: 0.000009262725768088987",
            "extra": "mean: 145.26434293942603 usec\nrounds: 4511"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 9516.973166742593,
            "unit": "iter/sec",
            "range": "stddev: 0.000014094256474941653",
            "extra": "mean: 105.07542497803148 usec\nrounds: 6798"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 6822.692241870476,
            "unit": "iter/sec",
            "range": "stddev: 0.000009775297858977455",
            "extra": "mean: 146.56970658343002 usec\nrounds: 5286"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 9443.894046470361,
            "unit": "iter/sec",
            "range": "stddev: 0.000007583506145195694",
            "extra": "mean: 105.8885238524831 usec\nrounds: 6687"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 6661.277292135499,
            "unit": "iter/sec",
            "range": "stddev: 0.000010164157388239092",
            "extra": "mean: 150.1213590343446 usec\nrounds: 5136"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 9469.75664371836,
            "unit": "iter/sec",
            "range": "stddev: 0.000007663846739268793",
            "extra": "mean: 105.59933455769817 usec\nrounds: 6806"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 6476.111250105525,
            "unit": "iter/sec",
            "range": "stddev: 0.000010316542798830074",
            "extra": "mean: 154.41365371598664 usec\nrounds: 5019"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 9179.965305332405,
            "unit": "iter/sec",
            "range": "stddev: 0.000010323546274199172",
            "extra": "mean: 108.93287357187786 usec\nrounds: 6565"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 5855.799369985218,
            "unit": "iter/sec",
            "range": "stddev: 0.000030806180178101825",
            "extra": "mean: 170.7708780334331 usec\nrounds: 4698"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 9031.00387287906,
            "unit": "iter/sec",
            "range": "stddev: 0.000010712563003565482",
            "extra": "mean: 110.72966129525119 usec\nrounds: 6578"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 5951.0509468690425,
            "unit": "iter/sec",
            "range": "stddev: 0.000009669175787670812",
            "extra": "mean: 168.03754646498507 usec\nrounds: 4498"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 8765.172508503012,
            "unit": "iter/sec",
            "range": "stddev: 0.000008376698929113342",
            "extra": "mean: 114.08788578090271 usec\nrounds: 5577"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 5383.387132882626,
            "unit": "iter/sec",
            "range": "stddev: 0.00001097268054351022",
            "extra": "mean: 185.75665753106128 usec\nrounds: 4269"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 8575.248810877742,
            "unit": "iter/sec",
            "range": "stddev: 0.00001080199662520544",
            "extra": "mean: 116.61469212782438 usec\nrounds: 3849"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 5131.737655050205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010133746407072056",
            "extra": "mean: 194.86576813136347 usec\nrounds: 3778"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 8098.114185287146,
            "unit": "iter/sec",
            "range": "stddev: 0.000008174484422067443",
            "extra": "mean: 123.48553961079293 usec\nrounds: 5756"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 4256.530317668067,
            "unit": "iter/sec",
            "range": "stddev: 0.000029029821167302545",
            "extra": "mean: 234.9331322389942 usec\nrounds: 3229"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 7854.370111718709,
            "unit": "iter/sec",
            "range": "stddev: 0.000008296669791002609",
            "extra": "mean: 127.31765702102597 usec\nrounds: 5633"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3965.9173475775506,
            "unit": "iter/sec",
            "range": "stddev: 0.00002317467072164293",
            "extra": "mean: 252.14847218407536 usec\nrounds: 2912"
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
        "date": 1762361698704,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 17323.94939053474,
            "unit": "iter/sec",
            "range": "stddev: 0.000037655335688657404",
            "extra": "mean: 57.72355814814192 usec\nrounds: 2700"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 6043.59883954864,
            "unit": "iter/sec",
            "range": "stddev: 0.00004704914455801124",
            "extra": "mean: 165.46432457695752 usec\nrounds: 4492"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 1508.9116519296488,
            "unit": "iter/sec",
            "range": "stddev: 0.00006633515264625412",
            "extra": "mean: 662.7293246235889 usec\nrounds: 995"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 260.29177530052135,
            "unit": "iter/sec",
            "range": "stddev: 0.008014528400650223",
            "extra": "mean: 3.8418424817512746 msec\nrounds: 274"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 17372.67432163588,
            "unit": "iter/sec",
            "range": "stddev: 0.000029310220109380127",
            "extra": "mean: 57.56166157760771 usec\nrounds: 10611"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 5962.871259576296,
            "unit": "iter/sec",
            "range": "stddev: 0.000046541635599836665",
            "extra": "mean: 167.70444245195006 usec\nrounds: 2398"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 1421.0636694370485,
            "unit": "iter/sec",
            "range": "stddev: 0.00011512592468051088",
            "extra": "mean: 703.6982378109407 usec\nrounds: 1005"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 255.50012737667598,
            "unit": "iter/sec",
            "range": "stddev: 0.008781946899569768",
            "extra": "mean: 3.9138923736258286 msec\nrounds: 273"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 9296.261416105459,
            "unit": "iter/sec",
            "range": "stddev: 0.000009247222167800219",
            "extra": "mean: 107.57012472428258 usec\nrounds: 1812"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 6504.832923917714,
            "unit": "iter/sec",
            "range": "stddev: 0.000010640696934444911",
            "extra": "mean: 153.73185010226558 usec\nrounds: 4890"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 4265.862546196487,
            "unit": "iter/sec",
            "range": "stddev: 0.000014825651744175272",
            "extra": "mean: 234.4191799831001 usec\nrounds: 3567"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 2022.394525635182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000201066542320097",
            "extra": "mean: 494.4633637622836 usec\nrounds: 1446"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 9172.68345757616,
            "unit": "iter/sec",
            "range": "stddev: 0.00000895713086843388",
            "extra": "mean: 109.0193512754495 usec\nrounds: 6038"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 6292.730209579197,
            "unit": "iter/sec",
            "range": "stddev: 0.000022868106658636203",
            "extra": "mean: 158.91353461773014 usec\nrounds: 4983"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 4062.7452920659666,
            "unit": "iter/sec",
            "range": "stddev: 0.000013679177380892783",
            "extra": "mean: 246.13898438400136 usec\nrounds: 3394"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1865.2041112137945,
            "unit": "iter/sec",
            "range": "stddev: 0.000017675421904839162",
            "extra": "mean: 536.1343533331819 usec\nrounds: 1050"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 9517.84213207821,
            "unit": "iter/sec",
            "range": "stddev: 0.000008553618736611205",
            "extra": "mean: 105.06583174243626 usec\nrounds: 5343"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 6735.7213131794215,
            "unit": "iter/sec",
            "range": "stddev: 0.000010284897001871037",
            "extra": "mean: 148.4621992960656 usec\nrounds: 5113"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 9366.281753469948,
            "unit": "iter/sec",
            "range": "stddev: 0.000008778811058413177",
            "extra": "mean: 106.7659532695061 usec\nrounds: 5949"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 6644.622419758657,
            "unit": "iter/sec",
            "range": "stddev: 0.000013647336360491641",
            "extra": "mean: 150.49764107383567 usec\nrounds: 5327"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 9076.152930253005,
            "unit": "iter/sec",
            "range": "stddev: 0.00001580412893330995",
            "extra": "mean: 110.17883983276208 usec\nrounds: 5257"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 6436.041224514583,
            "unit": "iter/sec",
            "range": "stddev: 0.000011738695863671603",
            "extra": "mean: 155.37501472039153 usec\nrounds: 4076"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 9164.619000466471,
            "unit": "iter/sec",
            "range": "stddev: 0.00000857719958592418",
            "extra": "mean: 109.11528345576623 usec\nrounds: 5313"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 6387.565281156505,
            "unit": "iter/sec",
            "range": "stddev: 0.000010641744899664085",
            "extra": "mean: 156.55417298826328 usec\nrounds: 4983"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 8911.305360558285,
            "unit": "iter/sec",
            "range": "stddev: 0.000010106839182377272",
            "extra": "mean: 112.21700520173297 usec\nrounds: 6344"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 5966.581754124013,
            "unit": "iter/sec",
            "range": "stddev: 0.000028130769764463017",
            "extra": "mean: 167.60015050641263 usec\nrounds: 4146"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 8893.609586770632,
            "unit": "iter/sec",
            "range": "stddev: 0.000008717952118952471",
            "extra": "mean: 112.4402853805854 usec\nrounds: 5992"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 5870.282170864078,
            "unit": "iter/sec",
            "range": "stddev: 0.000010728495421136659",
            "extra": "mean: 170.3495625752526 usec\nrounds: 4147"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 8439.243028316178,
            "unit": "iter/sec",
            "range": "stddev: 0.00001672109482279138",
            "extra": "mean: 118.49403988541408 usec\nrounds: 5240"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 5227.942861906665,
            "unit": "iter/sec",
            "range": "stddev: 0.000011325389056828228",
            "extra": "mean: 191.27982581571166 usec\nrounds: 4168"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 8141.467194113469,
            "unit": "iter/sec",
            "range": "stddev: 0.000021788651137835445",
            "extra": "mean: 122.82798372301133 usec\nrounds: 5345"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 5040.435974665458,
            "unit": "iter/sec",
            "range": "stddev: 0.000011021860456144084",
            "extra": "mean: 198.3955366214867 usec\nrounds: 4055"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 7959.861333707197,
            "unit": "iter/sec",
            "range": "stddev: 0.000009147314945107551",
            "extra": "mean: 125.6303292326656 usec\nrounds: 4796"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 4230.859283165146,
            "unit": "iter/sec",
            "range": "stddev: 0.00001295522618877441",
            "extra": "mean: 236.35860544430366 usec\nrounds: 3196"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 7714.306059247088,
            "unit": "iter/sec",
            "range": "stddev: 0.000009335537031814471",
            "extra": "mean: 129.62928775703764 usec\nrounds: 5595"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3873.145934758561,
            "unit": "iter/sec",
            "range": "stddev: 0.00002690909378436298",
            "extra": "mean: 258.18805096543224 usec\nrounds: 3159"
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
        "date": 1762784001335,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 16461.20976518322,
            "unit": "iter/sec",
            "range": "stddev: 0.00003660356944337024",
            "extra": "mean: 60.748876556757104 usec\nrounds: 2730"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 5818.836063709316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000483300712195281",
            "extra": "mean: 171.85567509570515 usec\nrounds: 4706"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 1466.4416871618928,
            "unit": "iter/sec",
            "range": "stddev: 0.00006188974617537204",
            "extra": "mean: 681.9227854435658 usec\nrounds: 1319"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 252.65518377213115,
            "unit": "iter/sec",
            "range": "stddev: 0.008802694325618166",
            "extra": "mean: 3.957963517985432 msec\nrounds: 278"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 16943.620362147394,
            "unit": "iter/sec",
            "range": "stddev: 0.000028938019523064453",
            "extra": "mean: 59.01926380704522 usec\nrounds: 10864"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 5880.712638682251,
            "unit": "iter/sec",
            "range": "stddev: 0.000046267444774357416",
            "extra": "mean: 170.04741796464992 usec\nrounds: 4687"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 1438.694644336372,
            "unit": "iter/sec",
            "range": "stddev: 0.00006245798994346375",
            "extra": "mean: 695.0745274104157 usec\nrounds: 1058"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 248.13733443705058,
            "unit": "iter/sec",
            "range": "stddev: 0.009514976657670671",
            "extra": "mean: 4.030026365313793 msec\nrounds: 271"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 9036.648279972376,
            "unit": "iter/sec",
            "range": "stddev: 0.000008404673781374255",
            "extra": "mean: 110.66049812033371 usec\nrounds: 1596"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 6186.398985304649,
            "unit": "iter/sec",
            "range": "stddev: 0.000010908805520579953",
            "extra": "mean: 161.6449250000572 usec\nrounds: 4560"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 3949.71075715734,
            "unit": "iter/sec",
            "range": "stddev: 0.000013140728030388822",
            "extra": "mean: 253.18309655659783 usec\nrounds: 2817"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 1918.3873400737943,
            "unit": "iter/sec",
            "range": "stddev: 0.000020769350141154576",
            "extra": "mean: 521.2711630809308 usec\nrounds: 1441"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 9016.560338121644,
            "unit": "iter/sec",
            "range": "stddev: 0.000008749437298989016",
            "extra": "mean: 110.90703799452673 usec\nrounds: 5764"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 6000.974370554664,
            "unit": "iter/sec",
            "range": "stddev: 0.000019457139552509482",
            "extra": "mean: 166.63960521257334 usec\nrounds: 4681"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 3801.1885645414563,
            "unit": "iter/sec",
            "range": "stddev: 0.000014560590647396059",
            "extra": "mean: 263.07560991008916 usec\nrounds: 3007"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1765.9322563368746,
            "unit": "iter/sec",
            "range": "stddev: 0.000027527492535106015",
            "extra": "mean: 566.2731378350433 usec\nrounds: 1081"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 9274.031157065,
            "unit": "iter/sec",
            "range": "stddev: 0.000007956115254938866",
            "extra": "mean: 107.82797502660917 usec\nrounds: 6567"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 6535.485366596681,
            "unit": "iter/sec",
            "range": "stddev: 0.000011785542700462972",
            "extra": "mean: 153.01082381900343 usec\nrounds: 5080"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 9221.789311375154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000097788241908907",
            "extra": "mean: 108.43882529028197 usec\nrounds: 6548"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 6489.909509703059,
            "unit": "iter/sec",
            "range": "stddev: 0.00001520041010158133",
            "extra": "mean: 154.08535334813234 usec\nrounds: 4480"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 9058.930438762027,
            "unit": "iter/sec",
            "range": "stddev: 0.000008611753321564402",
            "extra": "mean: 110.38830762196004 usec\nrounds: 6573"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 6215.056055091587,
            "unit": "iter/sec",
            "range": "stddev: 0.000009943772610707485",
            "extra": "mean: 160.89959465140555 usec\nrounds: 4749"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 8694.09947786268,
            "unit": "iter/sec",
            "range": "stddev: 0.000021813416852038865",
            "extra": "mean: 115.02053807254524 usec\nrounds: 6527"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 6157.59134355821,
            "unit": "iter/sec",
            "range": "stddev: 0.000011131121429529383",
            "extra": "mean: 162.40116373525734 usec\nrounds: 4776"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 8820.245840001202,
            "unit": "iter/sec",
            "range": "stddev: 0.000009146355141471446",
            "extra": "mean: 113.37552468944152 usec\nrounds: 6278"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 5693.877902393773,
            "unit": "iter/sec",
            "range": "stddev: 0.000010979120477492416",
            "extra": "mean: 175.6272293052839 usec\nrounds: 4361"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 8655.86478082706,
            "unit": "iter/sec",
            "range": "stddev: 0.00000865788055813656",
            "extra": "mean: 115.52860694116008 usec\nrounds: 6195"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 5560.8844622081715,
            "unit": "iter/sec",
            "range": "stddev: 0.000011280549418869321",
            "extra": "mean: 179.82750887849053 usec\nrounds: 4280"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 8305.361053277153,
            "unit": "iter/sec",
            "range": "stddev: 0.000009340652494571852",
            "extra": "mean: 120.4041574574795 usec\nrounds: 5176"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 4874.76462591975,
            "unit": "iter/sec",
            "range": "stddev: 0.000025418344320990397",
            "extra": "mean: 205.13810957822898 usec\nrounds: 3769"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 7757.551404610892,
            "unit": "iter/sec",
            "range": "stddev: 0.00003131772889724909",
            "extra": "mean: 128.9066546701354 usec\nrounds: 5835"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 4803.1183311730365,
            "unit": "iter/sec",
            "range": "stddev: 0.000011483385896609015",
            "extra": "mean: 208.1980769680051 usec\nrounds: 3430"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 7558.594169498664,
            "unit": "iter/sec",
            "range": "stddev: 0.000009556402842577377",
            "extra": "mean: 132.2997342594895 usec\nrounds: 5543"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 3972.6462136576197,
            "unit": "iter/sec",
            "range": "stddev: 0.000048196903416156626",
            "extra": "mean: 251.72138323369575 usec\nrounds: 2839"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 7393.346387902998,
            "unit": "iter/sec",
            "range": "stddev: 0.000009594963720141607",
            "extra": "mean: 135.2567494519398 usec\nrounds: 5017"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3689.4096765679597,
            "unit": "iter/sec",
            "range": "stddev: 0.000021164276364118984",
            "extra": "mean: 271.0460717743444 usec\nrounds: 2480"
          }
        ]
      }
    ]
  }
}
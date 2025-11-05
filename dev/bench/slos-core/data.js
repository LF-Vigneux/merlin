window.BENCHMARK_DATA = {
  "lastUpdate": 1762342765600,
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
      }
    ]
  }
}
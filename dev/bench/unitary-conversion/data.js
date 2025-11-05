window.BENCHMARK_DATA = {
  "lastUpdate": 1762342776433,
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
        "date": 1762253936515,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-10]",
            "value": 167.36028720244008,
            "unit": "iter/sec",
            "range": "stddev: 0.00004225345156321054",
            "extra": "mean: 5.975133149660491 msec\nrounds: 147"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-20]",
            "value": 41.21821247307161,
            "unit": "iter/sec",
            "range": "stddev: 0.00011050711406856074",
            "extra": "mean: 24.261120024390014 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-40]",
            "value": 10.028927921084433,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308306348210813",
            "extra": "mean: 99.71155519999684 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-100]",
            "value": 1.5573909682216833,
            "unit": "iter/sec",
            "range": "stddev: 0.0040587473380753495",
            "extra": "mean: 642.0995244000011 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-10]",
            "value": 1765.7169910462,
            "unit": "iter/sec",
            "range": "stddev: 0.000016632960751776776",
            "extra": "mean: 566.3421743523535 usec\nrounds: 1583"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-20]",
            "value": 916.8393300941926,
            "unit": "iter/sec",
            "range": "stddev: 0.0001051087165429488",
            "extra": "mean: 1.090703645858281 msec\nrounds: 833"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-40]",
            "value": 487.3835177069846,
            "unit": "iter/sec",
            "range": "stddev: 0.000022905451943762625",
            "extra": "mean: 2.0517722977271484 msec\nrounds: 440"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-100]",
            "value": 196.46227242645622,
            "unit": "iter/sec",
            "range": "stddev: 0.00007775046852841773",
            "extra": "mean: 5.0900357999999235 msec\nrounds: 185"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-10]",
            "value": 24645.293392796397,
            "unit": "iter/sec",
            "range": "stddev: 0.00000450517942469325",
            "extra": "mean: 40.575698737361805 usec\nrounds: 11880"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-20]",
            "value": 23142.276364321788,
            "unit": "iter/sec",
            "range": "stddev: 0.000005657099629280015",
            "extra": "mean: 43.21096093821133 usec\nrounds: 10445"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-40]",
            "value": 19545.683332263245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048938843746877265",
            "extra": "mean: 51.16219182520683 usec\nrounds: 2471"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-100]",
            "value": 6866.989790532363,
            "unit": "iter/sec",
            "range": "stddev: 0.00001015493623538066",
            "extra": "mean: 145.62421534086408 usec\nrounds: 3520"
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
        "date": 1762342775772,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-10]",
            "value": 166.2693277238357,
            "unit": "iter/sec",
            "range": "stddev: 0.00032350774394972946",
            "extra": "mean: 6.014338385134663 msec\nrounds: 148"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-20]",
            "value": 40.86955378635979,
            "unit": "iter/sec",
            "range": "stddev: 0.0003825036153823165",
            "extra": "mean: 24.468091949997017 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-40]",
            "value": 9.822744856074202,
            "unit": "iter/sec",
            "range": "stddev: 0.0015346028492392607",
            "extra": "mean: 101.80453780000391 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_fullparameter_benchmark[cpu-100]",
            "value": 1.5298059509931416,
            "unit": "iter/sec",
            "range": "stddev: 0.01217940426215389",
            "extra": "mean: 653.6776767999925 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-10]",
            "value": 1781.3686632675083,
            "unit": "iter/sec",
            "range": "stddev: 0.000041959291804382384",
            "extra": "mean: 561.36611169848 usec\nrounds: 1513"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-20]",
            "value": 958.6806412587201,
            "unit": "iter/sec",
            "range": "stddev: 0.00007864098738908462",
            "extra": "mean: 1.0431002327188215 msec\nrounds: 868"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-40]",
            "value": 490.15021210044085,
            "unit": "iter/sec",
            "range": "stddev: 0.00023284854967152988",
            "extra": "mean: 2.0401908951843555 msec\nrounds: 353"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_quantumreservoir_benchmark[cpu-100]",
            "value": 199.99330298289738,
            "unit": "iter/sec",
            "range": "stddev: 0.00014935972813645513",
            "extra": "mean: 5.000167431034009 msec\nrounds: 174"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-10]",
            "value": 25005.292002368034,
            "unit": "iter/sec",
            "range": "stddev: 0.00000536663711051319",
            "extra": "mean: 39.99153458817032 usec\nrounds: 10784"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-20]",
            "value": 23056.18798294477,
            "unit": "iter/sec",
            "range": "stddev: 0.000006523892993011211",
            "extra": "mean: 43.372304248201154 usec\nrounds: 6991"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-40]",
            "value": 19474.37160101237,
            "unit": "iter/sec",
            "range": "stddev: 0.000008743584650378504",
            "extra": "mean: 51.349538793231986 usec\nrounds: 2552"
          },
          {
            "name": "benchmarks/benchmark_unitary_conversion.py::test_noparameter_benchmark[cpu-100]",
            "value": 6868.658296137519,
            "unit": "iter/sec",
            "range": "stddev: 0.000016676996142577938",
            "extra": "mean: 145.5888409185145 usec\nrounds: 2351"
          }
        ]
      }
    ]
  }
}
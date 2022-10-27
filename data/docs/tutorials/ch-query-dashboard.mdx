---
id: ch-query-dashboard
title: Powerful analytics on distributed tracing data
description: Example clickhouse queries to run analytics on distributed tracing data
---
### GroupBy a tag
```
select toStartOfInterval(timestamp, INTERVAL 1 MINUTE) AS interval, tagMap['peer.service'] as op_name, toFloat64(avg(durationNano)) as value from signoz_traces.signoz_index_v2  where tagMap['peer.service']!='' and timestamp > now() - INTERVAL 30 MINUTE  group by (op_name, interval) order by (op_name, interval) asc;
```

### Count with groupby `customer_id` on attributeMap of a span event filtered by name
```
WITH arrayFilter(x -> JSONExtractString(x, 'name')='Getting customer', events) as filteredEvents
select count() as count, arrayJoin(arrayMap(x -> JSONExtractString(JSONExtractString(x, 'attributeMap'), 'customer_id'), filteredEvents)) as resultArray from signoz_traces.signoz_index_v2 where  not empty(filteredEvents) and timestamp > toUnixTimestamp(now() - INTERVAL 1 MINUTE) group by resultArray;
```

```
┌─count─┬─resultArray─┐
│  1010 │ 567         │
│  1072 │ 123         │
│  1076 │ 731         │
│  1067 │ 392         │
└───────┴─────────────┘
```

### Sum of values (converting to int from string) groupby `customer_id` on attributeMap of a span event filtered by name

```
WITH arrayFilter(x -> JSONExtractString(x, 'name')='Getting customer', events) as filteredEvents
select sum(toInt32(resultArray)) as sum, arrayJoin(arrayMap(x -> JSONExtractString(JSONExtractString(x, 'attributeMap'), 'customer_id'), filteredEvents)) as resultArray from signoz_traces.signoz_index_v2 where  not empty(filteredEvents) and timestamp > toUnixTimestamp(now() - INTERVAL 1 MINUTE) group by resultArray;
```

```
┌────sum─┬─resultArray─┐
│ 572670 │ 567         │
│ 131856 │ 123         │
│ 786556 │ 731         │
│ 418264 │ 392         │
└────────┴─────────────┘
```

### Plotting a chart on `100ms` interval

Plot a chart of 1 minute showing count of spans in `100ms` interval of service `frontend` with duration > 50ms

```
select fromUnixTimestamp64Milli(intDiv( toUnixTimestamp64Milli ( timestamp ), 100) * 100) AS interval, toFloat64(count()) as count from (select timestamp from signoz_traces.signoz_index_v2 where serviceName='frontend' and durationNano>=50*exp10(6) and timestamp > now() - INTERVAL 1 MINUTE) group by interval order by interval asc;
```

### Logs

```
select toStartOfInterval(fromUnixTimestamp64Nano(timestamp), INTERVAL 1 MINUTE) AS interval, quantile(0.9)(bytes) as value from signoz_logs.logs  where timestamp > toUnixTimestamp64Nano(now64() - INTERVAL 30 MINUTE)  group by interval order by interval asc;
```

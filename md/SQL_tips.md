### SQL Tips:

```sql
-- String as Multi-Params:
DECLARE @multiParams VARCHAR(100) = 'Alfa,Beta,Gamma';
DECLARE @paramsXml XML;
SELECT @paramsXml = CAST('<i>' + REPLACE(@multiParams,',','</i><i>') + '</i>' AS XML)
```
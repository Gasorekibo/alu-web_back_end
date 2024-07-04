-- SQL script that lists all bands with Glam rock as their main style, ranked by their longevity
SELECT band_name,
       CASE
           WHEN formed IS NOT NULL AND split IS NOT NULL THEN TIMESTAMPDIFF(YEAR, formed, split)
           ELSE NULL 
       END AS lifespan
FROM metal_bands
WHERE style = 'Glam rock'
ORDER BY lifespan DESC;


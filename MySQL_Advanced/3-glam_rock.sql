-- Select bands with Glam rock as their main style, ranked by longevity
SELECT band_name,
       TIMESTAMPDIFF(YEAR, formed, COALESCE(split, CURDATE())) AS lifespan
FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;

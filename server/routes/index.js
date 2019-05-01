const express = require('express')
const router = express.Router()
const conn = require('../db')

// get category list
router.get('/categories', (req, res, next) => {
  const sql = `
  SELECT c.name, c.slug, c.id, p.name as parentName, p.id as parentId, p.slug as parentSlug 
  FROM categories c 
  LEFT JOIN categories p ON c.parent_id = p.id
  `
  conn.query(sql, (err, results, fields) => {
    const cats = results.filter(category => category.parentId === null).map(parent => {
      return {
        id: parent.id,
        slug: parent.slug,
        name: parent.name,
        child_categories: results.filter(child => {
          return child.parentId === parent.id
        })
          .map(child => {
            return {
              id: child.id,
              slug: child.slug,
              name: child.name
            }
          })
      }
    })
    res.json(cats)
  })
})

// get specific category
router.get('/category/:slug', (req, res, next) => {
  const sql = `SELECT name, id FROM categories WHERE slug = ?`

  conn.query(sql, [req.params.slug], (err, results, fields) => {
    res.json({
      name: results[0].name,
      categoryId: results[0].id
    })
  })
})


// list posts within that one category
router.get('/posts/:categoryId', (req, res, next) => {
  const sql = `
    SELECT  p.*, c.name as categoryName, c.id as categoryId, l.name as location
    FROM posts p 
    LEFT JOIN categories c ON p.category_id = c.id 
    LEFT JOIN locations l ON p.location_id = l.loc_id
    WHERE c.id  = ?
    GROUP BY p.post_id
    ORDER BY p.post_id DESC
  `

  conn.query(sql, [req.params.categoryId], (err, results, fields) => {
    res.json(results)
  })
})

// get the specific post
router.get('/post/:post_id', (req, res, next) => {
  const sql = `
  SELECT  p.*, c.name as catName, c.id as catId, c.slug as catSlug, l.name as location
  FROM posts p 
  LEFT JOIN categories c ON p.category_id = c.id 
  LEFT JOIN locations l ON p.location_id = l.loc_id
  WHERE p.post_id  = ?
  `

  conn.query(sql, [req.params.post_id], (err, results, fields) => {
    res.json(results[0])
  })
})

// get location list
router.get('/locations', (req, res, next) => {
  const sql = `
  SELECT  l.name as location, l.loc_id as loc_id
  FROM locations l 
  `

  conn.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

// post new post
router.post('/post', (req, res, next) => {
  const sql = `
  INSERT INTO posts (title, body, category_id, location_id, pic_url)
  VALUES (?, ?, ?, ?, ?)
  `
  conn.query(sql, [req.body.title, req.body.body, req.body.category_id, req.body.location_id, req.body.pic_url], (err, results, fields) => {
    res.json({
      id: results.insertID,
      title: req.body.title,
      body: req.body.body,
      category_id: req.body.category_id,
      location_id: req.body.location_id,
      pic_url: req.body.pic_url
    })
  })
})


module.exports = router;
